import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateProveedorInput, UpdateProveedorInput } from "./proveedores.schema"

export async function findAll() {
  return prisma.proveedor.findMany({
    where: { activo: true },
    orderBy: { nombre: "asc" },
  })
}

export async function findById(id: number) {
  const proveedor = await prisma.proveedor.findUnique({ where: { id } })
  if (!proveedor) throw new AppError("Proveedor no encontrado", 404)
  return proveedor
}

export async function createProveedor(input: CreateProveedorInput) {
  return prisma.proveedor.create({ data: input })
}

export async function updateProveedor(id: number, input: UpdateProveedorInput) {
  const proveedor = await prisma.proveedor.findUnique({ where: { id } })
  if (!proveedor) throw new AppError("Proveedor no encontrado", 404)
  return prisma.proveedor.update({ where: { id }, data: input })
}

export async function deactivateProveedor(id: number) {
  const proveedor = await prisma.proveedor.findUnique({ where: { id } })
  if (!proveedor) throw new AppError("Proveedor no encontrado", 404)
  return prisma.proveedor.update({ where: { id }, data: { activo: false } })
}
