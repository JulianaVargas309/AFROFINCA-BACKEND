import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateEventoInput, UpdateEventoInput } from "./calendario.schema"

const eventoInclude = {
  finca: { select: { id: true, nombre: true } },
  lote: { select: { id: true, nombre: true } },
  cultivo: { select: { id: true, nombre: true } },
  user: { select: { id: true, nombre: true } },
  recordatorios: { select: { id: true, titulo: true, fecha: true, enviado: true } },
}

export async function findAll(filters: {
  fechaDesde?: string
  fechaHasta?: string
  tipo?: string
  userId?: number
  fincaId?: number
  loteId?: number
}) {
  const where: Record<string, unknown> = {}

  if (filters.fechaDesde || filters.fechaHasta) {
    where.fechaInicio = {}
    if (filters.fechaDesde) (where.fechaInicio as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.fechaInicio as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }
  if (filters.tipo) where.tipo = filters.tipo
  if (filters.userId) where.userId = filters.userId
  if (filters.fincaId) where.fincaId = filters.fincaId
  if (filters.loteId) where.loteId = filters.loteId

  return prisma.eventoCalendario.findMany({
    where,
    orderBy: { fechaInicio: "asc" },
    include: eventoInclude,
  })
}

export async function findById(id: number) {
  const evento = await prisma.eventoCalendario.findUnique({
    where: { id },
    include: eventoInclude,
  })
  if (!evento) throw new AppError("Evento no encontrado", 404)
  return evento
}

export async function create(input: CreateEventoInput, userId: number) {
  return prisma.eventoCalendario.create({
    data: { ...input, userId },
    include: eventoInclude,
  })
}

export async function update(id: number, input: UpdateEventoInput, userId: number) {
  const evento = await prisma.eventoCalendario.findFirst({ where: { id, userId } })
  if (!evento) throw new AppError("Evento no encontrado", 404)

  return prisma.eventoCalendario.update({
    where: { id },
    data: input,
    include: eventoInclude,
  })
}

export async function remove(id: number, userId: number) {
  const evento = await prisma.eventoCalendario.findFirst({ where: { id, userId } })
  if (!evento) throw new AppError("Evento no encontrado", 404)

  return prisma.eventoCalendario.delete({ where: { id } })
}
