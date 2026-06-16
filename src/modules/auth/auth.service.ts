import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { prisma } from "../../lib/prisma"
import { env } from "../../config/env"
import { AppError } from "../../types"
import { RegisterInput, LoginInput } from "./auth.schema"

export async function registerUser(input: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: { email: input.email },
  })
  if (existing) {
    throw new AppError("El email ya está registrado")
  }

  const password = await bcrypt.hash(input.password, 10)
  const user = await prisma.user.create({
    data: { ...input, password },
    select: {
      id: true,
      nombre: true,
      email: true,
      rol: true,
      activo: true,
      createdAt: true,
    },
  })

  const token = jwt.sign(
    { id: user.id, email: user.email, nombre: user.nombre, rol: user.rol },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn as any }
  )

  return { user, token }
}

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { email: input.email },
  })
  if (!user || !user.activo) {
    throw new AppError("Credenciales inválidas", 401)
  }

  const valid = await bcrypt.compare(input.password, user.password)
  if (!valid) {
    throw new AppError("Credenciales inválidas", 401)
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, nombre: user.nombre, rol: user.rol },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn as any }
  )

  return {
    user: {
      id: user.id,
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
    },
    token,
  }
}
