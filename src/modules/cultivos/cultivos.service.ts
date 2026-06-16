import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { verifyLoteOwnership } from "../../lib/ownership"
import { CreateCultivoInput, UpdateCultivoInput } from "./cultivos.schema"

export async function findAll(loteId: number, userId: number) {
  await verifyLoteOwnership(loteId, userId)
  return prisma.cultivo.findMany({
    where: { loteId, activo: true },
    orderBy: { fechaSiembra: "desc" },
    include: { lote: { select: { id: true, nombre: true } } },
  })
}

export async function findById(id: number, userId: number) {
  const cultivo = await prisma.cultivo.findFirst({
    where: { id, lote: { finca: { userId } } },
    include: {
      lote: { select: { id: true, nombre: true } },
      gastos: { select: { id: true, descripcion: true, monto: true } },
    },
  })
  if (!cultivo) throw new AppError("Cultivo no encontrado", 404)
  return cultivo
}

export async function createCultivo(input: CreateCultivoInput, userId: number) {
  await verifyLoteOwnership(input.loteId, userId)
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
