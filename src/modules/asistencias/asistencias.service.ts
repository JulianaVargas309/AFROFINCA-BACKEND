import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateAsistenciaInput } from "./asistencias.schema"

const asistenciaInclude = {
  trabajador: { select: { id: true, nombre: true, apellido: true, documento: true } },
}

export async function findAll(
  fecha?: string,
  trabajadorId?: number,
  page?: number,
  limit?: number
) {
  const where: Record<string, unknown> = {}
  if (fecha) where.fecha = new Date(fecha)
  if (trabajadorId) where.trabajadorId = trabajadorId

  if (!page && !limit) {
    return prisma.asistencia.findMany({
      where,
      orderBy: [{ fecha: "desc" }, { trabajadorId: "asc" }],
      include: asistenciaInclude,
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.asistencia.findMany({
      where,
      orderBy: [{ fecha: "desc" }, { trabajadorId: "asc" }],
      skip: params.skip,
      take: params.take,
      include: asistenciaInclude,
    }),
    prisma.asistencia.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number) {
  const asistencia = await prisma.asistencia.findUnique({
    where: { id },
    include: asistenciaInclude,
  })
  if (!asistencia) throw new AppError("Registro de asistencia no encontrado", 404)
  return asistencia
}

export async function createOrUpdate(input: CreateAsistenciaInput) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id: input.trabajadorId } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)

  return prisma.asistencia.upsert({
    where: {
      trabajadorId_fecha: {
        trabajadorId: input.trabajadorId,
        fecha: input.fecha,
      },
    },
    create: input,
    update: input,
    include: asistenciaInclude,
  })
}

export async function marcarEntrada(trabajadorId: number) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id: trabajadorId } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const now = new Date()
  const horaActual = now.toISOString()

  const existing = await prisma.asistencia.findUnique({
    where: {
      trabajadorId_fecha: {
        trabajadorId,
        fecha: today,
      },
    },
  })

  if (existing) {
    return prisma.asistencia.update({
      where: { id: existing.id },
      data: { horaEntrada: horaActual },
      include: asistenciaInclude,
    })
  }

  return prisma.asistencia.create({
    data: {
      fecha: today,
      horaEntrada: horaActual,
      presente: true,
      trabajadorId,
    },
    include: asistenciaInclude,
  })
}

export async function marcarSalida(trabajadorId: number) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const now = new Date()
  const horaActual = now.toISOString()

  const existing = await prisma.asistencia.findUnique({
    where: {
      trabajadorId_fecha: {
        trabajadorId,
        fecha: today,
      },
    },
  })

  if (!existing) throw new AppError("No hay registro de entrada para hoy", 404)

  return prisma.asistencia.update({
    where: { id: existing.id },
    data: { horaSalida: horaActual },
    include: asistenciaInclude,
  })
}
