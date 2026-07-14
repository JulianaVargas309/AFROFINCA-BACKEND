import { prisma } from "../../lib/prisma"
import { AppError } from "../../types"
import { CreateAlertaInput } from "./alertas.schema"

export async function findAll(leida?: boolean) {
  const where: any = {}
  if (leida !== undefined) where.leida = leida

  return prisma.alertaInventario.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: { producto: { select: { id: true, nombre: true } } },
  })
}

export async function marcarLeida(id: number) {
  const alerta = await prisma.alertaInventario.findUnique({ where: { id } })
  if (!alerta) throw new AppError("Alerta no encontrada", 404)
  return prisma.alertaInventario.update({
    where: { id },
    data: { leida: true },
    include: { producto: { select: { id: true, nombre: true } } },
  })
}

export async function createAlerta(input: CreateAlertaInput) {
  const producto = await prisma.producto.findUnique({
    where: { id: input.productoId },
  })
  if (!producto) throw new AppError("Producto no encontrado", 404)

  return prisma.alertaInventario.create({
    data: {
      mensaje: input.mensaje,
      tipo: input.tipo ?? "BAJO_STOCK",
      productoId: input.productoId,
    },
  })
}

export async function generarAlertas() {
  const productos = await prisma.producto.findMany({
    where: { activo: true },
  })

  const conStockBajo = productos.filter((p) => Number(p.stockActual) < Number(p.stockMinimo))

  if (conStockBajo.length === 0) return []

  const alertas = await Promise.all(
    conStockBajo.map((p) =>
      prisma.alertaInventario.create({
        data: {
          mensaje: `Stock bajo: ${p.nombre} (actual: ${p.stockActual}, mínimo: ${p.stockMinimo})`,
          tipo: "BAJO_STOCK",
          productoId: p.id,
        },
      })
    )
  )

  return alertas
}
