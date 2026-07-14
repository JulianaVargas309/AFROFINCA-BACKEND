import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { UpsertConfigInput } from "./configuracion.schema"

export async function findAll() {
  return prisma.configuracion.findMany({ orderBy: { llave: "asc" } })
}

export async function findByLlave(llave: string) {
  const config = await prisma.configuracion.findUnique({ where: { llave } })
  if (!config) throw new AppError("Configuración no encontrada", 404)
  return config
}

export async function upsert(llave: string, input: UpsertConfigInput) {
  return prisma.configuracion.upsert({
    where: { llave },
    update: {
      valor: input.valor,
      tipo: input.tipo ?? "string",
      descripcion: input.descripcion ?? null,
    },
    create: {
      llave,
      valor: input.valor,
      tipo: input.tipo ?? "string",
      descripcion: input.descripcion ?? null,
    },
  })
}

export async function remove(llave: string) {
  const config = await prisma.configuracion.findUnique({ where: { llave } })
  if (!config) throw new AppError("Configuración no encontrada", 404)
  return prisma.configuracion.delete({ where: { llave } })
}
