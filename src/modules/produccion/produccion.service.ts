import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateProduccionInput, UpdateProduccionInput } from "./produccion.schema"

const include = {
  temporada: { select: { id: true, nombre: true } },
  cultivo: { select: { id: true, nombre: true, tipo: true } },
  lote: { select: { id: true, nombre: true } },
}

export async function findAll(
  userId: number,
  filters: {
    cultivoId?: number
    loteId?: number
    temporadaId?: number
    fechaDesde?: string
    fechaHasta?: string
    page?: number
    limit?: number
  }
) {
  const where: Record<string, unknown> = {
    lote: { finca: { userId } },
  }

  if (filters.cultivoId) where.cultivoId = filters.cultivoId
  if (filters.loteId) where.loteId = filters.loteId
  if (filters.temporadaId) where.temporadaId = filters.temporadaId
  if (filters.fechaDesde || filters.fechaHasta) {
    where.fecha = {}
    if (filters.fechaDesde) (where.fecha as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.fecha as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy: { fecha: "desc" }, include }
    if (filters.limit) opts.take = filters.limit
    return prisma.produccionHistorial.findMany(opts as Parameters<typeof prisma.produccionHistorial.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.produccionHistorial.findMany({ where, orderBy: { fecha: "desc" }, skip: params.skip, take: params.take, include }),
    prisma.produccionHistorial.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number, userId: number) {
  const produccion = await prisma.produccionHistorial.findFirst({
    where: { id, lote: { finca: { userId } } },
    include,
  })
  if (!produccion) throw new AppError("Registro de producción no encontrado", 404)
  return produccion
}

export async function create(input: CreateProduccionInput, userId: number) {
  await verifyOwnership(input.loteId, input.cultivoId, input.temporadaId, userId)

  return prisma.produccionHistorial.create({
    data: {
      fecha: input.fecha,
      cantidad: input.cantidad,
      unidad: input.unidad ?? "kg",
      calidad: input.calidad ?? null,
      destino: input.destino ?? null,
      observaciones: input.observaciones ?? null,
      temporadaId: input.temporadaId,
      cultivoId: input.cultivoId,
      loteId: input.loteId,
    },
    include,
  })
}

export async function update(id: number, input: UpdateProduccionInput, userId: number) {
  const produccion = await prisma.produccionHistorial.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!produccion) throw new AppError("Registro de producción no encontrado", 404)

  if (input.loteId || input.cultivoId || input.temporadaId) {
    await verifyOwnership(
      input.loteId ?? produccion.loteId,
      input.cultivoId ?? produccion.cultivoId,
      input.temporadaId ?? produccion.temporadaId,
      userId
    )
  }

  return prisma.produccionHistorial.update({
    where: { id },
    data: {
      fecha: input.fecha,
      cantidad: input.cantidad,
      unidad: input.unidad,
      calidad: input.calidad,
      destino: input.destino,
      observaciones: input.observaciones,
      temporadaId: input.temporadaId,
      cultivoId: input.cultivoId,
      loteId: input.loteId,
    },
    include,
  })
}

export async function remove(id: number, userId: number) {
  const produccion = await prisma.produccionHistorial.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!produccion) throw new AppError("Registro de producción no encontrado", 404)
  return prisma.produccionHistorial.delete({ where: { id } })
}

async function verifyOwnership(loteId: number, cultivoId: number, temporadaId: number, userId: number) {
  const [lote, cultivo, temporada] = await Promise.all([
    prisma.lote.findFirst({ where: { id: loteId, finca: { userId } } }),
    prisma.cultivo.findFirst({ where: { id: cultivoId, lote: { finca: { userId } } } }),
    prisma.temporada.findFirst({ where: { id: temporadaId, finca: { userId } } }),
  ])
  if (!lote) throw new AppError("Lote no encontrado", 404)
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)
  if (!temporada) throw new AppError("Temporada no encontrada", 404)
}
