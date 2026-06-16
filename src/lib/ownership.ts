import { prisma } from "./prisma"
import { AppError } from "../types"

export async function verifyFincaOwnership(fincaId: number, userId: number) {
  const finca = await prisma.finca.findFirst({
    where: { id: fincaId, userId },
  })
  if (!finca) throw new AppError("Finca no encontrada o no pertenece al usuario", 404)
  return finca
}

export async function verifyLoteOwnership(loteId: number, userId: number) {
  const lote = await prisma.lote.findFirst({
    where: { id: loteId, finca: { userId } },
  })
  if (!lote) throw new AppError("Lote no encontrado o no pertenece al usuario", 404)
  return lote
}
