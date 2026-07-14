import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateNotificacionInput } from "./notificaciones.schema"

export async function findAll(
  userId: number,
  filters: { leida?: boolean; page?: number; limit?: number }
) {
  const where: Record<string, unknown> = { userId }

  if (filters.leida !== undefined) where.leida = filters.leida

  const orderBy = { createdAt: "desc" as const }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy }
    if (filters.limit) opts.take = filters.limit
    return prisma.notificacion.findMany(opts as Parameters<typeof prisma.notificacion.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.notificacion.findMany({ where, orderBy, skip: params.skip, take: params.take }),
    prisma.notificacion.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number, userId: number) {
  const notificacion = await prisma.notificacion.findFirst({
    where: { id, userId },
  })
  if (!notificacion) throw new AppError("Notificación no encontrada", 404)
  return notificacion
}

export async function create(input: CreateNotificacionInput) {
  return prisma.notificacion.create({ data: input })
}

export async function marcarLeida(id: number, userId: number) {
  const notificacion = await prisma.notificacion.findFirst({
    where: { id, userId },
  })
  if (!notificacion) throw new AppError("Notificación no encontrada", 404)
  return prisma.notificacion.update({
    where: { id },
    data: { leida: true },
  })
}

export async function marcarTodasLeidas(userId: number) {
  await prisma.notificacion.updateMany({
    where: { userId, leida: false },
    data: { leida: true },
  })
  return { message: "Todas las notificaciones marcadas como leídas" }
}

export async function getNoLeidasCount(userId: number) {
  const count = await prisma.notificacion.count({
    where: { userId, leida: false },
  })
  return { count }
}

export async function remove(id: number, userId: number) {
  const notificacion = await prisma.notificacion.findFirst({
    where: { id, userId },
  })
  if (!notificacion) throw new AppError("Notificación no encontrada", 404)
  return prisma.notificacion.delete({ where: { id } })
}
