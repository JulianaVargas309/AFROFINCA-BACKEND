import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateCategoriaInput, UpdateCategoriaInput } from "./categorias.schema"

export async function findAll() {
  return prisma.categoriaProducto.findMany({
    where: { activo: true },
    orderBy: { nombre: "asc" },
  })
}

export async function findById(id: number) {
  const categoria = await prisma.categoriaProducto.findUnique({ where: { id } })
  if (!categoria) throw new AppError("Categoría no encontrada", 404)
  return categoria
}

export async function createCategoria(input: CreateCategoriaInput) {
  return prisma.categoriaProducto.create({ data: input })
}

export async function updateCategoria(id: number, input: UpdateCategoriaInput) {
  const categoria = await prisma.categoriaProducto.findUnique({ where: { id } })
  if (!categoria) throw new AppError("Categoría no encontrada", 404)
  return prisma.categoriaProducto.update({ where: { id }, data: input })
}

export async function deactivateCategoria(id: number) {
  const categoria = await prisma.categoriaProducto.findUnique({ where: { id } })
  if (!categoria) throw new AppError("Categoría no encontrada", 404)
  return prisma.categoriaProducto.update({ where: { id }, data: { activo: false } })
}
