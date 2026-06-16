import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateJornalInput, UpdateJornalInput } from "./jornales.schema"

async function verifyFincaOwnership(fincaId: number, userId: number) {
  const finca = await prisma.finca.findFirst({
    where: { id: fincaId, userId },
  })
  if (!finca) throw new AppError("Finca no encontrada", 404)
  return finca
}

export async function findAll(trabajadorId: number, userId: number) {
  return prisma.jornal.findMany({
    where: { trabajadorId, finca: { userId } },
    orderBy: { fecha: "desc" },
    include: { finca: { select: { id: true, nombre: true } } },
  })
}

export async function findById(id: number, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, finca: { userId } },
    include: {
      trabajador: { select: { id: true, nombre: true } },
      finca: { select: { id: true, nombre: true } },
    },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return jornal
}

export async function createJornal(input: CreateJornalInput, userId: number) {
  await verifyFincaOwnership(input.fincaId, userId)

  const trabajador = await prisma.trabajador.findUnique({
    where: { id: input.trabajadorId },
  })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)

  return prisma.jornal.create({ data: input })
}

export async function updateJornal(id: number, input: UpdateJornalInput, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, finca: { userId } },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return prisma.jornal.update({ where: { id }, data: input })
}

export async function deleteJornal(id: number, userId: number) {
  const jornal = await prisma.jornal.findFirst({
    where: { id, finca: { userId } },
  })
  if (!jornal) throw new AppError("Jornal no encontrado", 404)
  return prisma.jornal.delete({ where: { id } })
}
