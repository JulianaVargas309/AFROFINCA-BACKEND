import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateMovimientoInput } from "./movimientos.schema"

export async function findAll(productoId: number) {
  return prisma.movimientoInventario.findMany({
    where: { productoId },
    orderBy: { fecha: "desc" },
    include: { user: { select: { id: true, nombre: true } } },
  })
}

export async function findById(id: number) {
  const movimiento = await prisma.movimientoInventario.findUnique({
    where: { id },
    include: {
      producto: { select: { id: true, nombre: true } },
      user: { select: { id: true, nombre: true } },
    },
  })
  if (!movimiento) throw new AppError("Movimiento no encontrado", 404)
  return movimiento
}

export async function createMovimiento(input: CreateMovimientoInput, userId: number) {
  const producto = await prisma.producto.findUnique({
    where: { id: input.productoId },
  })
  if (!producto) throw new AppError("Producto no encontrado", 404)

  if (input.tipo === "salida" && producto.stockActual < input.cantidad) {
    throw new AppError("Stock insuficiente")
  }

  const [movimiento] = await prisma.$transaction([
    prisma.movimientoInventario.create({
      data: { ...input, userId },
    }),
    prisma.producto.update({
      where: { id: input.productoId },
      data: {
        stockActual:
          input.tipo === "entrada"
            ? { increment: input.cantidad }
            : { decrement: input.cantidad },
      },
    }),
  ])

  return movimiento
}

export async function deleteMovimiento(id: number) {
  const movimiento = await prisma.movimientoInventario.findUnique({ where: { id } })
  if (!movimiento) throw new AppError("Movimiento no encontrado", 404)

  return prisma.$transaction(async (tx) => {
    await tx.producto.update({
      where: { id: movimiento.productoId },
      data: {
        stockActual:
          movimiento.tipo === "salida"
            ? { increment: movimiento.cantidad }
            : { decrement: movimiento.cantidad },
      },
    })

    return tx.movimientoInventario.delete({ where: { id } })
  })
}
