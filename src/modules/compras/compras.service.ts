import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateCompraInput, UpdateEstadoInput } from "./compras.schema"

const compraInclude = {
  proveedor: { select: { id: true, nombre: true } },
  detalles: {
    include: { producto: { select: { id: true, nombre: true } } },
  },
}

export async function findAll(userId: number, page?: number, limit?: number) {
  const where = { userId }

  if (!page && !limit) {
    return prisma.compra.findMany({
      where,
      orderBy: { fecha: "desc" },
      include: compraInclude,
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.compra.findMany({
      where,
      orderBy: { fecha: "desc" },
      skip: params.skip,
      take: params.take,
      include: compraInclude,
    }),
    prisma.compra.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number, userId: number) {
  const compra = await prisma.compra.findFirst({
    where: { id, userId },
    include: compraInclude,
  })
  if (!compra) throw new AppError("Compra no encontrada", 404)
  return compra
}

export async function createCompra(input: CreateCompraInput, userId: number) {
  const detallesConSubtotal = await Promise.all(
    input.detalles.map(async (d) => {
      const producto = await prisma.producto.findUnique({
        where: { id: d.productoId },
      })
      if (!producto) throw new AppError(`Producto ${d.productoId} no encontrado`, 404)
      return {
        productoId: d.productoId,
        cantidad: d.cantidad,
        precioUnitario: d.precioUnitario,
        subtotal: d.cantidad * d.precioUnitario,
      }
    })
  )

  const total = detallesConSubtotal.reduce((sum, d) => sum + d.subtotal, 0)

  const compra = await prisma.$transaction(async (tx) => {
    for (const d of detallesConSubtotal) {
      await tx.producto.update({
        where: { id: d.productoId },
        data: { stockActual: { increment: d.cantidad } },
      })
    }

    return tx.compra.create({
      data: {
        numeroFactura: input.numeroFactura,
        fecha: input.fecha,
        proveedorId: input.proveedorId,
        userId,
        total,
        observaciones: input.observaciones,
        detalles: { create: detallesConSubtotal },
      },
      include: compraInclude,
    })
  })

  return compra
}

export async function updateEstado(id: number, userId: number, input: UpdateEstadoInput) {
  const compra = await prisma.compra.findFirst({ where: { id, userId } })
  if (!compra) throw new AppError("Compra no encontrada", 404)

  if (input.estado === "ANULADA" && compra.estado !== "ANULADA") {
    await prisma.$transaction(async (tx) => {
      const detalles = await tx.detalleCompra.findMany({ where: { compraId: id } })
      for (const d of detalles) {
        await tx.producto.update({
          where: { id: d.productoId },
          data: { stockActual: { decrement: d.cantidad } },
        })
      }
    })
  }

  return prisma.compra.update({
    where: { id },
    data: { estado: input.estado },
    include: compraInclude,
  })
}

export async function deactivateCompra(id: number, userId: number) {
  const compra = await prisma.compra.findFirst({ where: { id, userId } })
  if (!compra) throw new AppError("Compra no encontrada", 404)

  return prisma.compra.update({
    where: { id },
    data: { estado: "ANULADA" },
    include: compraInclude,
  })
}
