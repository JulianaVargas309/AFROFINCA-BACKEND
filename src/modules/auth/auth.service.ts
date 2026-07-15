import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import { prisma } from "../../lib/prisma"
import { env } from "../../config/env"
import { AppError } from "../../types"
import { RegisterInput, LoginInput } from "./auth.schema"

function generateAccessToken(user: {
  id: number
  documento: string
  nombre: string | null
  rol: string
}) {
  return jwt.sign(
    { id: user.id, documento: user.documento, nombre: user.nombre, rol: user.rol },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN as any },
  )
}

async function generateRefreshToken(userId: number) {
  const token = crypto.randomBytes(40).toString("hex")
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + env.REFRESH_TOKEN_EXPIRES_IN_DAYS)

  await prisma.refreshToken.create({
    data: { token, userId, expiresAt },
  })

  return token
}

export async function registerUser(input: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: { documento: input.documento },
  })
  if (existing) {
    throw new AppError("El documento ya está registrado")
  }

  const password = await bcrypt.hash(input.documento, 10)
  const user = await prisma.user.create({
    data: {
      nombre: input.documento,
      documento: input.documento,
      password,
      correo: input.correo || null,
      telefono: input.telefono || null,
      rol: input.rol,
    },
    select: {
      id: true,
      nombre: true,
      documento: true,
      correo: true,
      telefono: true,
      rol: true,
      activo: true,
      createdAt: true,
    },
  })

  const accessToken = generateAccessToken(user)
  const refreshToken = await generateRefreshToken(user.id)

  return {
    user: { ...user, nombre: user.nombre ?? user.documento },
    accessToken,
    refreshToken,
  }
}

export async function loginUser(input: LoginInput) {
  const user = await prisma.user.findUnique({
    where: { documento: input.documento },
  })
  if (!user || !user.activo) {
    throw new AppError("Credenciales inválidas", 401)
  }

  const valid = await bcrypt.compare(input.password, user.password)
  if (!valid) {
    throw new AppError("Credenciales inválidas", 401)
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { ultimoAcceso: new Date() },
  })

  const accessToken = generateAccessToken(user)
  const refreshToken = await generateRefreshToken(user.id)

  return {
    user: {
      id: user.id,
      nombre: user.nombre,
      documento: user.documento,
      correo: user.correo,
      telefono: user.telefono,
      ultimoAcceso: new Date().toISOString(),
      rol: user.rol,
      activo: user.activo,
      createdAt: user.createdAt,
    },
    accessToken,
    refreshToken,
  }
}

export async function refreshUserToken(refreshToken: string) {
  const stored = await prisma.refreshToken.findUnique({
    where: { token: refreshToken },
    include: { user: true },
  })

  if (!stored) {
    throw new AppError("Refresh token inválido", 401)
  }

  if (stored.expiresAt < new Date()) {
    await prisma.refreshToken.delete({ where: { id: stored.id } })
    throw new AppError("Refresh token expirado", 401)
  }

  if (!stored.user.activo) {
    await prisma.refreshToken.delete({ where: { id: stored.id } })
    throw new AppError("Usuario desactivado", 401)
  }

  await prisma.refreshToken.delete({ where: { id: stored.id } })

  const accessToken = generateAccessToken(stored.user)
  const newRefreshToken = await generateRefreshToken(stored.user.id)

  return {
    user: {
      id: stored.user.id,
      nombre: stored.user.nombre,
      documento: stored.user.documento,
      rol: stored.user.rol,
    },
    accessToken,
    refreshToken: newRefreshToken,
  }
}
