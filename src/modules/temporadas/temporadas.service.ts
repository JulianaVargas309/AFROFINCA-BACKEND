import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateTemporadaInput, UpdateTemporadaInput } from "./temporadas.schema"

const include = {
  finca: { select: { id: true, nombre: true } },
}

export async function findAll(userId: number, page?: number, limit?: number) {
  const where = { finca: { userId } }

  if (!page && !limit) {
    return prisma.temporada.findMany({ where, orderBy: { fechaInicio: "desc" }, include })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.temporada.findMany({ where, orderBy: { fechaInicio: "desc" }, skip: params.skip, take: params.take, include }),
    prisma.temporada.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number, userId: number) {
  const temporada = await prisma.temporada.findFirst({
    where: { id, finca: { userId } },
    include,
  })
  if (!temporada) throw new AppError("Temporada no encontrada", 404)
  return temporada
}

export async function create(input: CreateTemporadaInput, userId: number) {
  const finca = await prisma.finca.findFirst({ where: { id: input.fincaId, userId } })
  if (!finca) throw new AppError("Finca no encontrada", 404)

  return prisma.temporada.create({
    data: {
      nombre: input.nombre,
      descripcion: input.descripcion ?? null,
      fechaInicio: input.fechaInicio,
      fechaFin: input.fechaFin ?? null,
      fincaId: input.fincaId,
    },
    include,
  })
}

export async function update(id: number, input: UpdateTemporadaInput, userId: number) {
  const temporada = await prisma.temporada.findFirst({
    where: { id, finca: { userId } },
  })
  if (!temporada) throw new AppError("Temporada no encontrada", 404)

  if (input.fincaId) {
    const finca = await prisma.finca.findFirst({ where: { id: input.fincaId, userId } })
    if (!finca) throw new AppError("Finca no encontrada", 404)
  }

  return prisma.temporada.update({
    where: { id },
    data: {
      nombre: input.nombre,
      descripcion: input.descripcion,
      fechaInicio: input.fechaInicio,
      fechaFin: input.fechaFin,
      fincaId: input.fincaId,
    },
    include,
  })
}

export async function remove(id: number, userId: number) {
  const temporada = await prisma.temporada.findFirst({
    where: { id, finca: { userId } },
  })
  if (!temporada) throw new AppError("Temporada no encontrada", 404)

  return prisma.temporada.update({
    where: { id },
    data: { activo: false },
  })
}
