import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateLoteInput, UpdateLoteInput } from "./lotes.schema"

async function verifyFincaOwnership(fincaId: number, userId: number) {
  const finca = await prisma.finca.findFirst({
    where: { id: fincaId, userId },
  })
  if (!finca) throw new AppError("Finca no encontrada", 404)
  return finca
}

export async function findAll(fincaId: number, userId: number) {
  await verifyFincaOwnership(fincaId, userId)
  return prisma.lote.findMany({
    where: { fincaId, activo: true },
    orderBy: { createdAt: "desc" },
  })
}

export async function findById(id: number, userId: number) {
  const lote = await prisma.lote.findFirst({
    where: { id, finca: { userId } },
  })
  if (!lote) throw new AppError("Lote no encontrado", 404)
  return lote
}

export async function createLote(input: CreateLoteInput, userId: number) {
  await verifyFincaOwnership(input.fincaId, userId)
  return prisma.lote.create({ data: input })
}

export async function updateLote(id: number, input: UpdateLoteInput, userId: number) {
  const lote = await prisma.lote.findFirst({
    where: { id, finca: { userId } },
  })
  if (!lote) throw new AppError("Lote no encontrado", 404)
  return prisma.lote.update({ where: { id }, data: input })
}

export async function deactivateLote(id: number, userId: number) {
  const lote = await prisma.lote.findFirst({
    where: { id, finca: { userId } },
  })
  if (!lote) throw new AppError("Lote no encontrado", 404)
  return prisma.lote.update({ where: { id }, data: { activo: false } })
}
