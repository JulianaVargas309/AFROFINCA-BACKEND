import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { verifyLoteOwnership } from "../../lib/ownership"
import { CreateBitacoraInput, UpdateBitacoraInput } from "./bitacora.schema"

export async function findAll(
  userId: number,
  filters: {
    loteId?: number
    cultivoId?: number
    fechaDesde?: string
    fechaHasta?: string
    actividad?: string
    page?: number
    limit?: number
  }
) {
  const where: Record<string, unknown> = {
    lote: { finca: { userId } },
  }

  if (filters.loteId) where.loteId = filters.loteId
  if (filters.cultivoId) where.cultivoId = filters.cultivoId
  if (filters.actividad) where.actividad = filters.actividad
  if (filters.fechaDesde || filters.fechaHasta) {
    where.fecha = {}
    if (filters.fechaDesde) (where.fecha as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.fecha as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }

  const orderBy = { fecha: "desc" as const }
  const include = {
    lote: { select: { id: true, nombre: true } },
    cultivo: { select: { id: true, nombre: true } },
    producto: { select: { id: true, nombre: true } },
    user: { select: { id: true, nombre: true } },
  }

  if (!filters.page && !filters.limit) {
    return prisma.bitacora.findMany({ where, orderBy, include })
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.bitacora.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
    prisma.bitacora.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number, userId: number) {
  const bitacora = await prisma.bitacora.findFirst({
    where: { id, lote: { finca: { userId } } },
    include: {
      lote: { select: { id: true, nombre: true } },
      cultivo: { select: { id: true, nombre: true } },
      producto: { select: { id: true, nombre: true } },
      user: { select: { id: true, nombre: true } },
    },
  })
  if (!bitacora) throw new AppError("Registro de bitácora no encontrado", 404)
  return bitacora
}

export async function createBitacora(input: CreateBitacoraInput, userId: number) {
  await verifyLoteOwnership(input.loteId, userId)

  if (input.productoId && input.cantidad) {
    const producto = await prisma.producto.findUnique({ where: { id: input.productoId } })
    if (!producto) throw new AppError("Producto no encontrado", 404)
    if (producto.stockActual < input.cantidad) {
      throw new AppError("Stock insuficiente para el insumo solicitado")
    }
  }

  const bitacora = await prisma.$transaction(async (tx) => {
    if (input.productoId && input.cantidad) {
      await tx.producto.update({
        where: { id: input.productoId },
        data: { stockActual: { decrement: input.cantidad } },
      })
      await tx.movimientoInventario.create({
        data: {
          tipo: "salida",
          cantidad: input.cantidad,
          motivo: `Bitácora: ${input.actividad} - ${input.descripcion}`,
          productoId: input.productoId,
          userId,
        },
      })
    }

    return tx.bitacora.create({
      data: {
        fecha: input.fecha,
        actividad: input.actividad,
        descripcion: input.descripcion,
        cantidad: input.cantidad ?? null,
        unidadMedida: input.unidadMedida ?? null,
        costo: input.costo,
        observaciones: input.observaciones ?? null,
        loteId: input.loteId,
        cultivoId: input.cultivoId ?? null,
        productoId: input.productoId ?? null,
        userId,
      },
      include: {
        lote: { select: { id: true, nombre: true } },
        cultivo: { select: { id: true, nombre: true } },
        producto: { select: { id: true, nombre: true } },
        user: { select: { id: true, nombre: true } },
      },
    })
  })

  return bitacora
}

export async function updateBitacora(id: number, input: UpdateBitacoraInput, userId: number) {
  const bitacora = await prisma.bitacora.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!bitacora) throw new AppError("Registro de bitácora no encontrado", 404)

  return prisma.bitacora.update({
    where: { id },
    data: input,
    include: {
      lote: { select: { id: true, nombre: true } },
      cultivo: { select: { id: true, nombre: true } },
      producto: { select: { id: true, nombre: true } },
      user: { select: { id: true, nombre: true } },
    },
  })
}

export async function deleteBitacora(id: number, userId: number) {
  const bitacora = await prisma.bitacora.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!bitacora) throw new AppError("Registro de bitácora no encontrado", 404)
  return prisma.bitacora.delete({ where: { id } })
}
