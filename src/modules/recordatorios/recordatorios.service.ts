import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateRecordatorioInput, UpdateRecordatorioInput } from "./recordatorios.schema"

export async function findAll(pendientes?: boolean, page?: number, limit?: number) {
  const where: Record<string, unknown> = {}
  if (pendientes) where.enviado = false

  if (!page && !limit) {
    return prisma.recordatorio.findMany({
      where,
      orderBy: { fecha: "asc" },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.recordatorio.findMany({
      where,
      orderBy: { fecha: "asc" },
      skip: params.skip,
      take: params.take,
    }),
    prisma.recordatorio.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number) {
  const recordatorio = await prisma.recordatorio.findUnique({ where: { id } })
  if (!recordatorio) throw new AppError("Recordatorio no encontrado", 404)
  return recordatorio
}

export async function create(input: CreateRecordatorioInput) {
  return prisma.recordatorio.create({ data: input })
}

export async function update(id: number, input: UpdateRecordatorioInput) {
  const recordatorio = await prisma.recordatorio.findUnique({ where: { id } })
  if (!recordatorio) throw new AppError("Recordatorio no encontrado", 404)

  return prisma.recordatorio.update({ where: { id }, data: input })
}

export async function marcarEnviado(id: number) {
  const recordatorio = await prisma.recordatorio.findUnique({ where: { id } })
  if (!recordatorio) throw new AppError("Recordatorio no encontrado", 404)

  return prisma.recordatorio.update({ where: { id }, data: { enviado: true } })
}

export async function remove(id: number) {
  const recordatorio = await prisma.recordatorio.findUnique({ where: { id } })
  if (!recordatorio) throw new AppError("Recordatorio no encontrado", 404)

  return prisma.recordatorio.delete({ where: { id } })
}
