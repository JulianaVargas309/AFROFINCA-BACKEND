import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateGastoInput, UpdateGastoInput } from "./gastos.schema"

const gastoInclude = {
  proveedor: { select: { id: true, nombre: true } },
  cultivo: { select: { id: true, nombre: true } },
  finca: { select: { id: true, nombre: true } },
  lote: { select: { id: true, nombre: true } },
}

export async function findAll(userId: number, page?: number, limit?: number) {
  const where = { userId }

  if (!page && !limit) {
    return prisma.gasto.findMany({ where, orderBy: { fecha: "desc" }, include: gastoInclude })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.gasto.findMany({
      where,
      orderBy: { fecha: "desc" },
      skip: params.skip,
      take: params.take,
      include: gastoInclude,
    }),
    prisma.gasto.count({ where }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number, userId: number) {
  const gasto = await prisma.gasto.findFirst({ where: { id, userId }, include: gastoInclude })
  if (!gasto) throw new AppError("Gasto no encontrado", 404)
  return gasto
}

export async function createGasto(input: CreateGastoInput, userId: number) {
  return prisma.gasto.create({ data: { ...input, userId } })
}

export async function updateGasto(id: number, input: UpdateGastoInput, userId: number) {
  const gasto = await prisma.gasto.findFirst({ where: { id, userId } })
  if (!gasto) throw new AppError("Gasto no encontrado", 404)
  return prisma.gasto.update({ where: { id }, data: input })
}

export async function deleteGasto(id: number, userId: number) {
  const gasto = await prisma.gasto.findFirst({ where: { id, userId } })
  if (!gasto) throw new AppError("Gasto no encontrado", 404)
  return prisma.gasto.delete({ where: { id } })
}
