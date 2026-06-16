import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateCultivoInput, UpdateCultivoInput } from "./cultivos.schema"

async function verifyAccess(loteId: number, userId: number) {
  const lote = await prisma.lote.findFirst({
    where: { id: loteId, finca: { userId } },
  })
  if (!lote) throw new AppError("Lote no encontrado", 404)
  return lote
}

export async function findAll(loteId: number, userId: number) {
  await verifyAccess(loteId, userId)
  return prisma.cultivo.findMany({
    where: { loteId, activo: true },
    orderBy: { fechaSiembra: "desc" },
  })
}

export async function findById(id: number, userId: number) {
  const cultivo = await prisma.cultivo.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)
  return cultivo
}

export async function createCultivo(input: CreateCultivoInput, userId: number) {
  await verifyAccess(input.loteId, userId)
  return prisma.cultivo.create({ data: input })
}

export async function updateCultivo(id: number, input: UpdateCultivoInput, userId: number) {
  const cultivo = await prisma.cultivo.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)
  return prisma.cultivo.update({ where: { id }, data: input })
}

export async function deactivateCultivo(id: number, userId: number) {
  const cultivo = await prisma.cultivo.findFirst({
    where: { id, lote: { finca: { userId } } },
  })
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)
  return prisma.cultivo.update({ where: { id }, data: { activo: false } })
}
