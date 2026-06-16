import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateClienteInput, UpdateClienteInput } from "./clientes.schema"

export async function findAll(page?: number, limit?: number) {
  if (!page && !limit) {
    return prisma.cliente.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.cliente.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
      skip: params.skip,
      take: params.take,
    }),
    prisma.cliente.count({ where: { activo: true } }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number) {
  const cliente = await prisma.cliente.findUnique({ where: { id } })
  if (!cliente) throw new AppError("Cliente no encontrado", 404)
  return cliente
}

export async function createCliente(input: CreateClienteInput) {
  return prisma.cliente.create({ data: input })
}

export async function updateCliente(id: number, input: UpdateClienteInput) {
  const cliente = await prisma.cliente.findUnique({ where: { id } })
  if (!cliente) throw new AppError("Cliente no encontrado", 404)
  return prisma.cliente.update({ where: { id }, data: input })
}

export async function deactivateCliente(id: number) {
  const cliente = await prisma.cliente.findUnique({ where: { id } })
  if (!cliente) throw new AppError("Cliente no encontrado", 404)
  return prisma.cliente.update({ where: { id }, data: { activo: false } })
}
