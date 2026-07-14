import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { getPaginationParams, paginatedResponse } from "../../lib/pagination"
import { CreateCajaInput, UpdateCajaInput, CreateMovimientoInput } from "./caja.schema"

export async function findAllCajas() {
  return prisma.caja.findMany({ orderBy: { nombre: "asc" } })
}

export async function findCajaById(id: number) {
  const caja = await prisma.caja.findUnique({ where: { id } })
  if (!caja) throw new AppError("Caja no encontrada", 404)
  return caja
}

export async function createCaja(input: CreateCajaInput) {
  return prisma.caja.create({ data: input })
}

export async function updateCaja(id: number, input: UpdateCajaInput) {
  const caja = await prisma.caja.findUnique({ where: { id } })
  if (!caja) throw new AppError("Caja no encontrada", 404)
  return prisma.caja.update({ where: { id }, data: input })
}

export async function findAllMovimientos(
  filters: {
    cajaId?: number
    page?: number
    limit?: number
  }
) {
  const where: Record<string, unknown> = {}
  if (filters.cajaId) where.cajaId = filters.cajaId

  const include = {
    caja: { select: { id: true, nombre: true } },
    user: { select: { id: true, nombre: true } },
  }

  const orderBy = { fecha: "desc" as const }

  if (!filters.page) {
    const opts: Record<string, unknown> = { where, orderBy, include }
    if (filters.limit) opts.take = filters.limit
    return prisma.movimientoCaja.findMany(opts as Parameters<typeof prisma.movimientoCaja.findMany>[0])
  }

  const params = getPaginationParams({ page: filters.page, limit: filters.limit })
  const [data, total] = await Promise.all([
    prisma.movimientoCaja.findMany({ where, orderBy, skip: params.skip, take: params.take, include }),
    prisma.movimientoCaja.count({ where }),
  ])
  return paginatedResponse(data, total, { page: filters.page, limit: filters.limit })
}

export async function createMovimiento(input: CreateMovimientoInput, userId: number) {
  return prisma.$transaction(async (tx) => {
    const caja = await tx.caja.findUnique({ where: { id: input.cajaId } })
    if (!caja) throw new AppError("Caja no encontrada", 404)

    if (input.tipo === "EGRESO" && caja.saldoActual < input.monto) {
      throw new AppError("Saldo insuficiente en la caja para realizar el egreso")
    }

    const incremento =
      input.tipo === "INGRESO"
        ? input.monto
        : input.tipo === "EGRESO"
          ? -input.monto
          : 0

    await tx.caja.update({
      where: { id: input.cajaId },
      data: { saldoActual: { increment: incremento } },
    })

    return tx.movimientoCaja.create({
      data: {
        tipo: input.tipo,
        monto: input.monto,
        concepto: input.concepto,
        referencia: input.referencia ?? null,
        cajaId: input.cajaId,
        userId,
      },
      include: {
        caja: { select: { id: true, nombre: true } },
        user: { select: { id: true, nombre: true } },
      },
    })
  })
}

export async function getSaldo(cajaId: number) {
  const caja = await prisma.caja.findUnique({ where: { id: cajaId } })
  if (!caja) throw new AppError("Caja no encontrada", 404)
  return { saldoActual: caja.saldoActual, caja: { id: caja.id, nombre: caja.nombre } }
}
