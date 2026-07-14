import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreatePermissionInput, UpdatePermissionInput } from "./permissions.schema"

export async function findAll() {
  return prisma.permission.findMany({
    where: { activo: true },
    orderBy: { nombre: "asc" },
  })
}

export async function findById(id: number) {
  const permission = await prisma.permission.findUnique({ where: { id } })
  if (!permission) throw new AppError("Permiso no encontrado", 404)
  return permission
}

export async function create(input: CreatePermissionInput) {
  return prisma.permission.create({ data: input })
}

export async function update(id: number, input: UpdatePermissionInput) {
  const permission = await prisma.permission.findUnique({ where: { id } })
  if (!permission) throw new AppError("Permiso no encontrado", 404)
  return prisma.permission.update({ where: { id }, data: input })
}

export async function remove(id: number) {
  const permission = await prisma.permission.findUnique({ where: { id } })
  if (!permission) throw new AppError("Permiso no encontrado", 404)
  return prisma.permission.update({
    where: { id },
    data: { activo: false },
  })
}
