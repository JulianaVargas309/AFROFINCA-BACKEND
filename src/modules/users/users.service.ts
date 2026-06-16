import bcrypt from "bcryptjs"
import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateUserInput, UpdateUserInput } from "./users.schema"

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
    where: { email: input.email },
  })
  if (existing) throw new AppError("El email ya está registrado")

  const password = await bcrypt.hash(input.password, 10)
  return prisma.user.create({
    data: { ...input, password },
    omit: { password: true },
  })
}

export async function updateUser(id: number, input: UpdateUserInput) {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new AppError("Usuario no encontrado", 404)

  if (input.email && input.email !== user.email) {
    const existing = await prisma.user.findUnique({
      where: { email: input.email },
    })
    if (existing) throw new AppError("El email ya está registrado")
  }

  const data: Record<string, unknown> = { ...input }
  if (data.password) {
    data.password = await bcrypt.hash(data.password as string, 10)
  }

  return prisma.user.update({
    where: { id },
    data,
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
