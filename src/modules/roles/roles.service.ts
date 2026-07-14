import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateRoleInput, UpdateRoleInput } from "./roles.schema"

export async function findAll() {
  return prisma.role.findMany({
    where: { activo: true },
    include: { permissions: { include: { permission: true } } },
    orderBy: { nombre: "asc" },
  })
}

export async function findById(id: number) {
  const role = await prisma.role.findUnique({
    where: { id },
    include: { permissions: { include: { permission: true } } },
  })
  if (!role) throw new AppError("Rol no encontrado", 404)
  return role
}

export async function create(input: CreateRoleInput) {
  const { permissionIds, ...data } = input
  return prisma.role.create({
    data: {
      ...data,
      permissions: permissionIds
        ? { create: permissionIds.map((permissionId) => ({ permissionId })) }
        : undefined,
    },
    include: { permissions: { include: { permission: true } } },
  })
}

export async function update(id: number, input: UpdateRoleInput) {
  const role = await prisma.role.findUnique({ where: { id } })
  if (!role) throw new AppError("Rol no encontrado", 404)

  const { permissionIds, ...data } = input

  if (permissionIds) {
    await prisma.$transaction([
      prisma.rolePermission.deleteMany({ where: { roleId: id } }),
      ...permissionIds.map((permissionId) =>
        prisma.rolePermission.create({ data: { roleId: id, permissionId } })
      ),
    ])
  }

  return prisma.role.update({
    where: { id },
    data,
    include: { permissions: { include: { permission: true } } },
  })
}

export async function remove(id: number) {
  const role = await prisma.role.findUnique({ where: { id } })
  if (!role) throw new AppError("Rol no encontrado", 404)
  return prisma.role.update({
    where: { id },
    data: { activo: false },
  })
}
