import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateRendimientoLoteInput, CreateRendimientoCultivoInput } from "./rendimiento.schema"

const loteInclude = {
  lote: { select: { id: true, nombre: true } },
}

const cultivoInclude = {
  cultivo: { select: { id: true, nombre: true, tipo: true } },
}

export async function findAllLotes(userId: number, page?: number, limit?: number) {
  const where = { lote: { finca: { userId } } }

  if (!page && !limit) {
    return prisma.rendimientoLote.findMany({ where, orderBy: { createdAt: "desc" }, include: loteInclude })
  }

  const take = limit ?? 10
  const skip = page ? (page - 1) * take : 0
  const [data, total] = await Promise.all([
    prisma.rendimientoLote.findMany({ where, orderBy: { createdAt: "desc" }, skip, take, include: loteInclude }),
    prisma.rendimientoLote.count({ where }),
  ])
  return {
    data,
    meta: { total, page: page ?? 1, limit: take, totalPages: Math.ceil(total / take) },
  }
}

export async function findByIdLote(id: number, userId: number) {
  const rendimiento = await prisma.rendimientoLote.findFirst({
    where: { id, lote: { finca: { userId } } },
    include: loteInclude,
  })
  if (!rendimiento) throw new AppError("Rendimiento de lote no encontrado", 404)
  return rendimiento
}

export async function createLote(input: CreateRendimientoLoteInput, userId: number) {
  const lote = await prisma.lote.findFirst({ where: { id: input.loteId, finca: { userId } } })
  if (!lote) throw new AppError("Lote no encontrado", 404)

  return prisma.rendimientoLote.create({
    data: {
      temporada: input.temporada ?? null,
      areaCultivada: input.areaCultivada ?? null,
      produccionTotal: input.produccionTotal,
      rendimiento: input.rendimiento ?? null,
      unidad: input.unidad ?? "kg/ha",
      observaciones: input.observaciones ?? null,
      loteId: input.loteId,
    },
    include: loteInclude,
  })
}

export async function findAllCultivos(userId: number, page?: number, limit?: number) {
  const where = { cultivo: { lote: { finca: { userId } } } }

  if (!page && !limit) {
    return prisma.rendimientoCultivo.findMany({ where, orderBy: { createdAt: "desc" }, include: cultivoInclude })
  }

  const take = limit ?? 10
  const skip = page ? (page - 1) * take : 0
  const [data, total] = await Promise.all([
    prisma.rendimientoCultivo.findMany({ where, orderBy: { createdAt: "desc" }, skip, take, include: cultivoInclude }),
    prisma.rendimientoCultivo.count({ where }),
  ])
  return {
    data,
    meta: { total, page: page ?? 1, limit: take, totalPages: Math.ceil(total / take) },
  }
}

export async function findByIdCultivo(id: number, userId: number) {
  const rendimiento = await prisma.rendimientoCultivo.findFirst({
    where: { id, cultivo: { lote: { finca: { userId } } } },
    include: cultivoInclude,
  })
  if (!rendimiento) throw new AppError("Rendimiento de cultivo no encontrado", 404)
  return rendimiento
}

export async function createCultivo(input: CreateRendimientoCultivoInput, userId: number) {
  const cultivo = await prisma.cultivo.findFirst({ where: { id: input.cultivoId, lote: { finca: { userId } } } })
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)

  return prisma.rendimientoCultivo.create({
    data: {
      temporada: input.temporada ?? null,
      areaCultivada: input.areaCultivada ?? null,
      produccionTotal: input.produccionTotal,
      rendimiento: input.rendimiento ?? null,
      unidad: input.unidad ?? "kg/ha",
      observaciones: input.observaciones ?? null,
      cultivoId: input.cultivoId,
    },
    include: cultivoInclude,
  })
}
