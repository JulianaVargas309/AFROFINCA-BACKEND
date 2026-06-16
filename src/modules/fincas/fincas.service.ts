import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateFincaInput, UpdateFincaInput } from "./fincas.schema"

export async function findAll(userId: number, page?: number, limit?: number) {
  if (!page && !limit) {
    return prisma.finca.findMany({
      where: { userId, activo: true },
      orderBy: { createdAt: "desc" },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.finca.findMany({
      where: { userId, activo: true },
      orderBy: { createdAt: "desc" },
      skip: params.skip,
      take: params.take,
    }),
    prisma.finca.count({ where: { userId, activo: true } }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number, userId: number) {
  const finca = await prisma.finca.findFirst({
    where: { id, userId },
  })
  if (!finca) throw new AppError("Finca no encontrada", 404)
  return finca
}

export async function createFinca(input: CreateFincaInput, userId: number) {
  return prisma.finca.create({
    data: { ...input, userId },
  })
}

export async function updateFinca(
  id: number,
  input: UpdateFincaInput,
  userId: number
) {
  const finca = await prisma.finca.findFirst({ where: { id, userId } })
  if (!finca) throw new AppError("Finca no encontrada", 404)

  return prisma.finca.update({
    where: { id },
    data: input,
  })
}

export async function deactivateFinca(id: number, userId: number) {
  const finca = await prisma.finca.findFirst({ where: { id, userId } })
  if (!finca) throw new AppError("Finca no encontrada", 404)

  return prisma.finca.update({
    where: { id },
    data: { activo: false },
  })
}
