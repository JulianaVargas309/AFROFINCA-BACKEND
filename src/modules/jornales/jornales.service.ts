import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { verifyLoteOwnership } from "../../lib/ownership"
import { CreateJornalInput, UpdateJornalInput } from "./jornales.schema"

export async function findAll(loteId: number | undefined, userId: number) {
  const where: Record<string, unknown> = {
    lote: { finca: { userId } },
  }
  if (loteId) {
    where.loteId = loteId
  }
  return prisma.jornal.findMany({
    where,
    orderBy: { fecha: "desc" },
    include: {
      trabajador: { select: { id: true, nombre: true } },
      lote: { select: { id: true, nombre: true } },
    },
  })
}

export async function findById(id: number, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, lote: { finca: { userId } } },
    include: {
      trabajador: { select: { id: true, nombre: true } },
      lote: { select: { id: true, nombre: true } },
    },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return jornal
}

export async function createJornal(input: CreateJornalInput, userId: number) {
  await verifyLoteOwnership(input.loteId, userId)

  const trabajador = await prisma.trabajador.findUnique({
    where: { id: input.trabajadorId },
  })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)

  return prisma.jornal.create({ data: input })
}

export async function updateJornal(id: number, input: UpdateJornalInput, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return prisma.jornal.update({ where: { id }, data: input })
}

export async function deleteJornal(id: number, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return prisma.jornal.delete({ where: { id } })
}

export async function findByTrabajador(trabajadorId: number, userId: number) {
  return prisma.jornal.findMany({
    where: {
      trabajadorId,
      lote: { finca: { userId } },
    },
    orderBy: { fecha: "desc" },
    include: {
      trabajador: { select: { id: true, nombre: true } },
      lote: { select: { id: true, nombre: true } },
    },
  })
}

export async function updateEstado(id: number, estado: string, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return prisma.jornal.update({
    where: { id },
    data: { estado: estado as any },
  })
}
