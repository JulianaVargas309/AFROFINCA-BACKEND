import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateActividadInput, UpdateActividadInput } from "./actividades.schema"

export async function findAll(
  userId: number,
  filters: {
    estado?: string
    fincaId?: number
    loteId?: number
    cultivoId?: number
    page?: number
    limit?: number
  }
) {
  const where: Record<string, unknown> = {
    responsableId: userId,
  }

  if (filters.estado) where.estado = filters.estado
  if (filters.fincaId) where.fincaId = filters.fincaId
  if (filters.loteId) where.loteId = filters.loteId
  if (filters.cultivoId) where.cultivoId = filters.cultivoId

  const orderBy = { createdAt: "desc" as const }
  const include = {
    evidencias: true,
    productosUtilizados: { include: { producto: { select: { id: true, nombre: true } } } },
    responsable: { select: { id: true, nombre: true } },
    lote: { select: { id: true, nombre: true } },
    cultivo: { select: { id: true, nombre: true } },
    finca: { select: { id: true, nombre: true } },
  }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy, include }
    if (filters.limit) opts.take = filters.limit
    return prisma.actividadSeguimiento.findMany(opts as Parameters<typeof prisma.actividadSeguimiento.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.actividadSeguimiento.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
    prisma.actividadSeguimiento.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number, userId: number) {
  const actividad = await prisma.actividadSeguimiento.findFirst({
    where: { id, responsableId: userId },
    include: {
      evidencias: true,
      productosUtilizados: { include: { producto: { select: { id: true, nombre: true } } } },
      responsable: { select: { id: true, nombre: true } },
      lote: { select: { id: true, nombre: true } },
      cultivo: { select: { id: true, nombre: true } },
      finca: { select: { id: true, nombre: true } },
    },
  })
  if (!actividad) throw new AppError("Actividad no encontrada", 404)
  return actividad
}

export async function create(input: CreateActividadInput, userId: number) {
  return prisma.$transaction(async (tx) => {
    const actividad = await tx.actividadSeguimiento.create({
      data: {
        titulo: input.titulo,
        descripcion: input.descripcion ?? null,
        estado: input.estado as any,
        fechaInicio: input.fechaInicio ?? null,
        fechaFin: input.fechaFin ?? null,
        tiempoInvertido: input.tiempoInvertido ?? null,
        costo: input.costo ?? null,
        responsableId: userId,
        loteId: input.loteId ?? null,
        cultivoId: input.cultivoId ?? null,
        fincaId: input.fincaId ?? null,
      },
    })

    if (input.evidencias?.length) {
      await tx.evidencia.createMany({
        data: input.evidencias.map((e) => ({
          url: e.url,
          tipo: e.tipo ?? "imagen",
          descripcion: e.descripcion ?? null,
          actividadId: actividad.id,
        })),
      })
    }

    if (input.productosUtilizados?.length) {
      await tx.actividadProducto.createMany({
        data: input.productosUtilizados.map((p) => ({
          productoId: p.productoId,
          cantidad: p.cantidad,
          actividadId: actividad.id,
        })),
      })
    }

    return tx.actividadSeguimiento.findUnique({
      where: { id: actividad.id },
      include: {
        evidencias: true,
        productosUtilizados: { include: { producto: { select: { id: true, nombre: true } } } },
        responsable: { select: { id: true, nombre: true } },
        lote: { select: { id: true, nombre: true } },
        cultivo: { select: { id: true, nombre: true } },
        finca: { select: { id: true, nombre: true } },
      },
    })
  })
}

export async function update(id: number, input: UpdateActividadInput, userId: number) {
  const actividad = await prisma.actividadSeguimiento.findFirst({
    where: { id, responsableId: userId },
  })
  if (!actividad) throw new AppError("Actividad no encontrada", 404)

  return prisma.actividadSeguimiento.update({
    where: { id },
    data: {
      titulo: input.titulo,
      descripcion: input.descripcion,
      estado: input.estado as any,
      fechaInicio: input.fechaInicio,
      fechaFin: input.fechaFin,
      tiempoInvertido: input.tiempoInvertido,
      costo: input.costo,
      loteId: input.loteId ?? null,
      cultivoId: input.cultivoId ?? null,
      fincaId: input.fincaId ?? null,
    },
    include: {
      evidencias: true,
      productosUtilizados: { include: { producto: { select: { id: true, nombre: true } } } },
      responsable: { select: { id: true, nombre: true } },
      lote: { select: { id: true, nombre: true } },
      cultivo: { select: { id: true, nombre: true } },
      finca: { select: { id: true, nombre: true } },
    },
  })
}

export async function updateEstado(id: number, estado: string, userId: number) {
  const actividad = await prisma.actividadSeguimiento.findFirst({
    where: { id, responsableId: userId },
  })
  if (!actividad) throw new AppError("Actividad no encontrada", 404)

  return prisma.actividadSeguimiento.update({
    where: { id },
    data: { estado: estado as any },
    include: {
      evidencias: true,
      productosUtilizados: { include: { producto: { select: { id: true, nombre: true } } } },
      lote: { select: { id: true, nombre: true } },
      cultivo: { select: { id: true, nombre: true } },
    },
  })
}

export async function remove(id: number, userId: number) {
  const actividad = await prisma.actividadSeguimiento.findFirst({
    where: { id, responsableId: userId },
  })
  if (!actividad) throw new AppError("Actividad no encontrada", 404)
  return prisma.actividadSeguimiento.delete({ where: { id } })
}
