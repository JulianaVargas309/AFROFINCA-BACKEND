import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateVentaInput, UpdateVentaInput } from "./ventas.schema"

export async function findAll(userId: number, page?: number, limit?: number) {
  const where = { userId }

  if (!page && !limit) {
    return prisma.venta.findMany({
      where,
      orderBy: { fecha: "desc" },
      include: {
        cliente: { select: { id: true, nombre: true } },
        detalles: {
          include: { producto: { select: { id: true, nombre: true } } },
        },
      },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.venta.findMany({
      where,
      orderBy: { fecha: "desc" },
      skip: params.skip,
      take: params.take,
      include: {
        cliente: { select: { id: true, nombre: true } },
        detalles: {
          include: { producto: { select: { id: true, nombre: true } } },
        },
      },
    }),
    prisma.venta.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number, userId: number) {
  const venta = await prisma.venta.findFirst({
    where: { id, userId },
    include: {
      cliente: { select: { id: true, nombre: true } },
      detalles: {
        include: { producto: { select: { id: true, nombre: true } } },
      },
    },
  })
  if (!venta) throw new AppError("Venta no encontrada", 404)
  return venta
}

export async function createVenta(input: CreateVentaInput, userId: number) {
  const cliente = await prisma.cliente.findUnique({
    where: { id: input.clienteId },
  })
  if (!cliente) throw new AppError("Cliente no encontrado", 404)

  const detallesConSubtotal = await Promise.all(
    input.detalles.map(async (d) => {
      const producto = await prisma.producto.findUnique({
        where: { id: d.productoId },
      })
      if (!producto) throw new AppError(`Producto ${d.productoId} no encontrado`, 404)
      if (producto.stockActual < d.cantidad) {
        throw new AppError(`Stock insuficiente para ${producto.nombre}`)
      }
      return {
        productoId: d.productoId,
        cantidad: d.cantidad,
        precioUnitario: d.precioUnitario,
        subtotal: d.cantidad * d.precioUnitario,
      }
    })
  )

  const total = detallesConSubtotal.reduce((sum, d) => sum + d.subtotal, 0)

  const venta = await prisma.$transaction(async (tx) => {
    for (const d of detallesConSubtotal) {
      await tx.producto.update({
        where: { id: d.productoId },
        data: { stockActual: { decrement: d.cantidad } },
      })
    }

    return tx.venta.create({
      data: {
        clienteId: input.clienteId,
        userId,
        total,
        detalles: { create: detallesConSubtotal },
      },
      include: {
        cliente: { select: { id: true, nombre: true } },
        detalles: {
          include: { producto: { select: { id: true, nombre: true } } },
        },
      },
    })
  })

  return venta
}

export async function updateVenta(id: number, input: UpdateVentaInput, userId: number) {
  const venta = await prisma.venta.findFirst({ where: { id, userId } })
  if (!venta) throw new AppError("Venta no encontrada", 404)
  if (venta.estado === "ANULADA") {
    throw new AppError("No se puede modificar una venta anulada")
  }

  if (input.estado === "ANULADA") {
    await prisma.$transaction(async (tx) => {
      const detalles = await tx.detalleVenta.findMany({ where: { ventaId: id } })
      for (const d of detalles) {
        await tx.producto.update({
          where: { id: d.productoId },
          data: { stockActual: { increment: d.cantidad } },
        })
      }
    })
  }

  return prisma.venta.update({
    where: { id },
    data: { estado: input.estado },
    include: {
      cliente: { select: { id: true, nombre: true } },
      detalles: {
        include: { producto: { select: { id: true, nombre: true } } },
      },
    },
  })
}

export async function deleteVenta(id: number, userId: number) {
  const venta = await prisma.venta.findFirst({ where: { id, userId } })
  if (!venta) throw new AppError("Venta no encontrada", 404)
  if (venta.estado === "ANULADA") {
    throw new AppError("La venta ya está anulada")
  }

  await prisma.$transaction(async (tx) => {
    const detalles = await tx.detalleVenta.findMany({ where: { ventaId: id } })
    for (const d of detalles) {
      await tx.producto.update({
        where: { id: d.productoId },
        data: { stockActual: { increment: d.cantidad } },
      })
    }
    await tx.venta.update({
      where: { id },
      data: { estado: "ANULADA" },
    })
  })

  return prisma.venta.findFirst({
    where: { id },
    include: {
      cliente: { select: { id: true, nombre: true } },
      detalles: {
        include: { producto: { select: { id: true, nombre: true } } },
      },
    },
  })
}
