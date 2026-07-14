import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateHistorialInput } from "./historial-laboral.schema"

const historialInclude = {
  trabajador: { select: { id: true, nombre: true, apellido: true, documento: true } },
}

export async function findAll(trabajadorId?: number, page?: number, limit?: number) {
  const where: Record<string, unknown> = {}
  if (trabajadorId) where.trabajadorId = trabajadorId

  if (!page && !limit) {
    return prisma.historialLaboral.findMany({
      where,
      orderBy: { fecha: "desc" },
      include: historialInclude,
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.historialLaboral.findMany({
      where,
      orderBy: { fecha: "desc" },
      skip: params.skip,
      take: params.take,
      include: historialInclude,
    }),
    prisma.historialLaboral.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number) {
  const historial = await prisma.historialLaboral.findUnique({
    where: { id },
    include: historialInclude,
  })
  if (!historial) throw new AppError("Registro de historial laboral no encontrado", 404)
  return historial
}

export async function create(input: CreateHistorialInput) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id: input.trabajadorId } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)
  return prisma.historialLaboral.create({
    data: input,
    include: historialInclude,
  })
}
