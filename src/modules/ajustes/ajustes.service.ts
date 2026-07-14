import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateAjusteInput } from "./ajustes.schema"

export async function findAll(
  productoId?: number,
  page?: number,
  limit?: number
) {
  const where: any = {}
  if (productoId) where.productoId = productoId

  if (!page && !limit) {
    return prisma.ajusteInventario.findMany({
      where,
      orderBy: { fecha: "desc" },
      include: {
        producto: { select: { id: true, nombre: true } },
        user: { select: { id: true, nombre: true } },
      },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.ajusteInventario.findMany({
      where,
      orderBy: { fecha: "desc" },
      skip: params.skip,
      take: params.take,
      include: {
        producto: { select: { id: true, nombre: true } },
        user: { select: { id: true, nombre: true } },
      },
    }),
    prisma.ajusteInventario.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function createAjuste(input: CreateAjusteInput, userId: number) {
  const producto = await prisma.producto.findUnique({
    where: { id: input.productoId },
  })
  if (!producto) throw new AppError("Producto no encontrado", 404)

  if (input.tipo === "salida" && producto.stockActual < input.cantidad) {
    throw new AppError("Stock insuficiente para realizar el ajuste")
  }

  const [ajuste] = await prisma.$transaction([
    prisma.ajusteInventario.create({
      data: { ...input, userId },
    }),
    prisma.producto.update({
      where: { id: input.productoId },
      data: {
        stockActual:
          input.tipo === "entrada"
            ? { increment: input.cantidad }
            : { decrement: input.cantidad },
      },
    }),
  ])

  return ajuste
}
