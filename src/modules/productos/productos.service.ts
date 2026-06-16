import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateProductoInput, UpdateProductoInput } from "./productos.schema"

export async function findAll(page?: number, limit?: number) {
  if (!page && !limit) {
    return prisma.producto.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
    })
  }

  const params = getPaginationParams({ page, limit })
  const [data, total] = await Promise.all([
    prisma.producto.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
      skip: params.skip,
      take: params.take,
    }),
    prisma.producto.count({ where: { activo: true } }),
  ])
  return paginatedResponse(data, total, { page, limit })
}

export async function findById(id: number) {
  const producto = await prisma.producto.findUnique({ where: { id } })
  if (!producto) throw new AppError("Producto no encontrado", 404)
  return producto
}

export async function createProducto(input: CreateProductoInput) {
  return prisma.producto.create({ data: input })
}

export async function updateProducto(id: number, input: UpdateProductoInput) {
  const producto = await prisma.producto.findUnique({ where: { id } })
  if (!producto) throw new AppError("Producto no encontrado", 404)
  return prisma.producto.update({ where: { id }, data: input })
}

export async function deactivateProducto(id: number) {
  const producto = await prisma.producto.findUnique({ where: { id } })
  if (!producto) throw new AppError("Producto no encontrado", 404)
  return prisma.producto.update({ where: { id }, data: { activo: false } })
}
