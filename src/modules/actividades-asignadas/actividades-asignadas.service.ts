import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateActividadAsignadaInput, UpdateActividadAsignadaInput } from "./actividades-asignadas.schema"

const actividadInclude = {
  trabajador: { select: { id: true, nombre: true, apellido: true, documento: true } },
  lote: { select: { id: true, nombre: true } },
  cultivo: { select: { id: true, nombre: true } },
}

export async function findAll(
  filters: {
    trabajadorId?: number
    estado?: string
    prioridad?: string
    page?: number
    limit?: number
  }
) {
  const where: Record<string, unknown> = {}
  if (filters.trabajadorId) where.trabajadorId = filters.trabajadorId
  if (filters.estado) where.estado = filters.estado
  if (filters.prioridad) where.prioridad = filters.prioridad

  if (!filters.page && !filters.limit) {
    return prisma.actividadAsignada.findMany({
      where,
      orderBy: { fechaAsignacion: "desc" },
      include: actividadInclude,
    })
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.actividadAsignada.findMany({
      where,
      orderBy: { fechaAsignacion: "desc" },
      skip: params.skip,
      take: params.take,
      include: actividadInclude,
    }),
    prisma.actividadAsignada.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number) {
  const actividad = await prisma.actividadAsignada.findUnique({
    where: { id },
    include: actividadInclude,
  })
  if (!actividad) throw new AppError("Actividad asignada no encontrada", 404)
  return actividad
}

export async function create(input: CreateActividadAsignadaInput) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id: input.trabajadorId } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)

  return prisma.actividadAsignada.create({
    data: input,
    include: actividadInclude,
  })
}

export async function update(id: number, input: UpdateActividadAsignadaInput) {
  const actividad = await prisma.actividadAsignada.findUnique({ where: { id } })
  if (!actividad) throw new AppError("Actividad asignada no encontrada", 404)

  return prisma.actividadAsignada.update({
    where: { id },
    data: input,
    include: actividadInclude,
  })
}

export async function remove(id: number) {
  const actividad = await prisma.actividadAsignada.findUnique({ where: { id } })
  if (!actividad) throw new AppError("Actividad asignada no encontrada", 404)

  return prisma.actividadAsignada.delete({ where: { id } })
}
