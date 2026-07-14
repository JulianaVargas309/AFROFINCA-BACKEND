import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreatePresupuestoInput, UpdatePresupuestoInput } from "./presupuestos.schema"

export async function findAll(
  userId: number,
  filters: { page?: number; limit?: number }
) {
  const where: Record<string, unknown> = {
    finca: { userId },
  }

  const orderBy = { createdAt: "desc" as const }
  const include = {
    partidas: true,
    finca: { select: { id: true, nombre: true } },
  }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy, include }
    if (filters.limit) opts.take = filters.limit
    return prisma.presupuesto.findMany(opts as Parameters<typeof prisma.presupuesto.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.presupuesto.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
    prisma.presupuesto.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function findById(id: number, userId: number) {
  const presupuesto = await prisma.presupuesto.findFirst({
    where: { id, finca: { userId } },
    include: {
      partidas: true,
      finca: { select: { id: true, nombre: true } },
    },
  })
  if (!presupuesto) throw new AppError("Presupuesto no encontrado", 404)
  return presupuesto
}

export async function create(input: CreatePresupuestoInput, userId: number) {
  if (input.fincaId) {
    const finca = await prisma.finca.findFirst({
      where: { id: input.fincaId, userId },
    })
    if (!finca) throw new AppError("Finca no encontrada o no pertenece al usuario", 404)
  }

  return prisma.$transaction(async (tx) => {
    const presupuesto = await tx.presupuesto.create({
      data: {
        nombre: input.nombre,
        descripcion: input.descripcion ?? null,
        montoTotal: input.montoTotal,
        periodoInicio: input.periodoInicio,
        periodoFin: input.periodoFin,
        fincaId: input.fincaId ?? null,
      },
    })

    if (input.partidas?.length) {
      await tx.presupuestoPartida.createMany({
        data: input.partidas.map((p) => ({
          concepto: p.concepto,
          montoPrevisto: p.montoPrevisto,
          categoria: p.categoria ?? null,
          presupuestoId: presupuesto.id,
        })),
      })
    }

    return tx.presupuesto.findUnique({
      where: { id: presupuesto.id },
      include: {
        partidas: true,
        finca: { select: { id: true, nombre: true } },
      },
    })
  })
}

export async function update(id: number, input: UpdatePresupuestoInput, userId: number) {
  const presupuesto = await prisma.presupuesto.findFirst({
    where: { id, finca: { userId } },
  })
  if (!presupuesto) throw new AppError("Presupuesto no encontrado", 404)

  return prisma.presupuesto.update({
    where: { id },
    data: {
      nombre: input.nombre,
      descripcion: input.descripcion,
      montoTotal: input.montoTotal,
      periodoInicio: input.periodoInicio,
      periodoFin: input.periodoFin,
      fincaId: input.fincaId,
    },
    include: {
      partidas: true,
      finca: { select: { id: true, nombre: true } },
    },
  })
}

export async function updateEstado(id: number, estado: string, userId: number) {
  const presupuesto = await prisma.presupuesto.findFirst({
    where: { id, finca: { userId } },
  })
  if (!presupuesto) throw new AppError("Presupuesto no encontrado", 404)

  return prisma.presupuesto.update({
    where: { id },
    data: { estado: estado as any },
    include: {
      partidas: true,
      finca: { select: { id: true, nombre: true } },
    },
  })
}

export async function remove(id: number, userId: number) {
  const presupuesto = await prisma.presupuesto.findFirst({
    where: { id, finca: { userId } },
  })
  if (!presupuesto) throw new AppError("Presupuesto no encontrado", 404)
  return prisma.presupuesto.delete({ where: { id } })
}
