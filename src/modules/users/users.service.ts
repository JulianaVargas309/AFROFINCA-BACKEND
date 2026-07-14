import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateUserInput, UpdateUserInput, ChangePasswordInput, ChangeRolInput } from "./users.schema"

export async function findAll() {
  return prisma.user.findMany({
    omit: { password: true },
    orderBy: { createdAt: "desc" },
  })
}

export async function findById(id: number) {
  const user = await prisma.user.findUnique({
    where: { id },
    omit: { password: true },
  })
  if (!user) throw new AppError("Usuario no encontrado", 404)
  return user
}

export async function createUser(input: CreateUserInput) {
  const existing = await prisma.user.findUnique({
    where: { documento: input.documento },
  })
  if (existing) throw new AppError("El documento ya está registrado")

  const password = await bcrypt.hash(input.password, 10)
  return prisma.user.create({
    data: { ...input, password, nombre: input.nombre ?? input.documento },
    omit: { password: true },
  })
}

export async function updateUser(id: number, input: UpdateUserInput) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  const { roleId, ...rest } = input

  return prisma.user.update({
    where: { id },
    data: {
      ...rest,
      ...(roleId !== undefined ? { role: roleId ? { connect: { id: roleId } } : { disconnect: true } } : {}),
    },
    omit: { password: true },
  })
}

export async function deactivateUser(id: number) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  return prisma.user.update({
    where: { id },
    data: { activo: false },
    omit: { password: true },
  })
}

export async function changePassword(id: number, input: ChangePasswordInput) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  const isValid = await bcrypt.compare(input.currentPassword, user.password)
  if (!isValid) throw new AppError("Contraseña actual incorrecta", 401)

  const password = await bcrypt.hash(input.newPassword, 10)
  return prisma.user.update({
    where: { id },
    data: { password },
    omit: { password: true },
  })
}

export async function changeRol(id: number, input: ChangeRolInput) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  return prisma.user.update({
    where: { id },
    data: {
      rol: input.rol,
      ...(input.roleId !== undefined ? { role: { connect: { id: input.roleId } } } : {}),
    },
    omit: { password: true },
  })
}

export async function updateProfile(id: number, input: UpdateUserInput) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  const { roleId, ...profileData } = input

  return prisma.user.update({
    where: { id },
    data: profileData,
    omit: { password: true },
  })
}

export async function findByDocumento(documento: string) {
  const user = await prisma.user.findUnique({
    where: { documento },
    omit: { password: true },
  })
  if (!user) throw new AppError("Usuario no encontrado", 404)
  return user
}

export async function search(query: string) {
  return prisma.user.findMany({
    where: {
      OR: [
        { nombre: { contains: query, mode: "insensitive" } },
        { apellido: { contains: query, mode: "insensitive" } },
        { documento: { contains: query, mode: "insensitive" } },
      ],
    },
    omit: { password: true },
    orderBy: { nombre: "asc" },
  })
}
