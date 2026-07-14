import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateAuditoriaInput } from "./auditoria.schema"

export async function findAll(filters: {
  entidad?: string
  accion?: string
  fechaDesde?: string
  fechaHasta?: string
  page?: number
  limit?: number
}) {
  const where: Record<string, unknown> = {}

  if (filters.entidad) where.entidad = filters.entidad
  if (filters.accion) where.accion = filters.accion
  if (filters.fechaDesde || filters.fechaHasta) {
    where.createdAt = {}
    if (filters.fechaDesde) (where.createdAt as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.createdAt as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }

  const orderBy = { createdAt: "desc" as const }
  const include = {
    user: { select: { id: true, nombre: true } },
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.auditLog.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
    prisma.auditLog.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number) {
  const auditoria = await prisma.auditLog.findUnique({
    where: { id },
    include: { user: { select: { id: true, nombre: true } } },
  })
  if (!auditoria) throw new AppError("Registro de auditoría no encontrado", 404)
  return auditoria
}

export async function create(input: CreateAuditoriaInput, userId: number) {
  return prisma.auditLog.create({
    data: {
      accion: input.accion,
      entidad: input.entidad,
      entidadId: input.entidadId ?? null,
      detalle: input.detalle ?? null,
      ip: input.ip ?? null,
      userAgent: input.userAgent ?? null,
      userId,
    },
  })
}
