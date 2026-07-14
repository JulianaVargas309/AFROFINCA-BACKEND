import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateFlujoInput } from "./flujo.schema"

export async function findAll(filters: {
  fechaDesde?: string
  fechaHasta?: string
  tipo?: string
  categoria?: string
  page?: number
  limit?: number
}) {
  const where: Record<string, unknown> = {}

  if (filters.tipo) where.tipo = filters.tipo
  if (filters.categoria) where.categoria = filters.categoria
  if (filters.fechaDesde || filters.fechaHasta) {
    where.fecha = {}
    if (filters.fechaDesde) (where.fecha as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.fecha as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }

  const orderBy = { fecha: "desc" as const }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy }
    if (filters.limit) opts.take = filters.limit
    return prisma.flujoEfectivo.findMany(opts as Parameters<typeof prisma.flujoEfectivo.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.flujoEfectivo.findMany({ where, orderBy, skip: params.skip, take: params.take }),
    prisma.flujoEfectivo.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number) {
  const flujo = await prisma.flujoEfectivo.findUnique({ where: { id } })
  if (!flujo) throw new AppError("Registro de flujo no encontrado", 404)
  return flujo
}

export async function create(input: CreateFlujoInput) {
  return prisma.flujoEfectivo.create({
    data: {
      tipo: input.tipo,
      categoria: input.categoria ?? null,
      monto: input.monto,
      descripcion: input.descripcion ?? null,
      fecha: input.fecha ?? new Date(),
    },
  })
}

export async function getResumen(filters: { fechaDesde?: string; fechaHasta?: string }) {
  const where: Record<string, unknown> = {}
  if (filters.fechaDesde || filters.fechaHasta) {
    where.fecha = {}
    if (filters.fechaDesde) (where.fecha as Record<string, unknown>).gte = new Date(filters.fechaDesde)
    if (filters.fechaHasta) (where.fecha as Record<string, unknown>).lte = new Date(filters.fechaHasta)
  }

  const registros = await prisma.flujoEfectivo.findMany({ where })

  const resumen: Record<string, { total: number; categorias: Record<string, number> }> = {}

  for (const r of registros) {
    if (!resumen[r.tipo]) {
      resumen[r.tipo] = { total: 0, categorias: {} }
    }
    resumen[r.tipo].total += r.monto
    const cat = r.categoria ?? "Sin categoría"
    if (!resumen[r.tipo].categorias[cat]) {
      resumen[r.tipo].categorias[cat] = 0
    }
    resumen[r.tipo].categorias[cat] += r.monto
  }

  return resumen
}
