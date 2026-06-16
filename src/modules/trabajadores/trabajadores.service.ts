import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateTrabajadorInput, UpdateTrabajadorInput } from "./trabajadores.schema"

export async function findAll() {
  return prisma.trabajador.findMany({
    where: { activo: true },
    orderBy: { nombre: "asc" },
  })
}

export async function findById(id: number) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)
  return trabajador
}

export async function createTrabajador(input: CreateTrabajadorInput) {
  return prisma.trabajador.create({ data: input })
}

export async function updateTrabajador(id: number, input: UpdateTrabajadorInput) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)
  return prisma.trabajador.update({ where: { id }, data: input })
}

export async function deactivateTrabajador(id: number) {
  const trabajador = await prisma.trabajador.findUnique({ where: { id } })
  if (!trabajador) throw new AppError("Trabajador no encontrado", 404)
  return prisma.trabajador.update({ where: { id }, data: { activo: false } })
}
