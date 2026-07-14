import { prisma } from "../../lib/prisma"

export async function getResumen(userId: number) {
  const now = new Date()
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const endOfDay = new Date(startOfDay.getTime() + 86400000)
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  const fincas = await prisma.finca.findMany({
    where: { userId },
    select: { id: true },
  })
  const fincaIds = fincas.map((f) => f.id)

  const [
    totalFincas,
    totalLotes,
    cultivosActivos,
    trabajadoresActivos,
    jornalesDelDia,
    actividadesPendientes,
    eventosHoy,
    inventarioCritico,
    ventasDelMes,
    gastosDelMes,
    produccionPorCultivo,
    notificacionesNoLeidas,
  ] = await Promise.all([
    Promise.resolve(fincaIds.length),
    prisma.lote.count({ where: { fincaId: { in: fincaIds } } }),
    prisma.cultivo.count({
      where: { lote: { fincaId: { in: fincaIds } }, estado: "ACTIVO" },
    }),
    prisma.trabajador.count({ where: { activo: true } }),
    prisma.jornal.count({
      where: { fecha: { gte: startOfDay, lt: endOfDay }, lote: { fincaId: { in: fincaIds } } },
    }),
    prisma.actividadSeguimiento.count({
      where: {
        responsableId: userId,
        estado: { in: ["PENDIENTE", "EN_PROCESO"] },
      },
    }),
    prisma.eventoCalendario.count({
      where: {
        userId,
        fechaInicio: { gte: startOfDay, lt: endOfDay },
      },
    }),
    prisma.$queryRawUnsafe<[{ count: bigint }]>(
      'SELECT COUNT(*)::int as count FROM productos WHERE "stockActual" < "stockMinimo"'
    ).then((r) => Number(r[0].count)),
    prisma.venta.aggregate({
      where: {
        userId,
        fecha: { gte: startOfMonth, lt: endOfMonth },
        estado: { not: "ANULADA" },
      },
      _sum: { total: true },
    }),
    prisma.gasto.aggregate({
      where: {
        userId,
        fecha: { gte: startOfMonth, lt: endOfMonth },
      },
      _sum: { monto: true },
    }),
    prisma.produccionHistorial.groupBy({
      by: ["cultivoId"],
      where: { lote: { fincaId: { in: fincaIds } } },
      _sum: { cantidad: true },
    }),
    prisma.notificacion.count({
      where: { userId, leida: false },
    }),
  ])

  const ventasTotal = ventasDelMes._sum.total ?? 0
  const gastosTotal = gastosDelMes._sum.monto ?? 0

  const produccion = await Promise.all(
    produccionPorCultivo.map(async (p) => {
      const cultivo = await prisma.cultivo.findUnique({
        where: { id: p.cultivoId },
        select: { nombre: true },
      })
      return {
        cultivoId: p.cultivoId,
        cultivo: cultivo?.nombre ?? "Desconocido",
        total: p._sum.cantidad ?? 0,
      }
    })
  )

  return {
    totalFincas,
    totalLotes,
    cultivosActivos,
    trabajadoresActivos,
    jornalesDelDia,
    actividadesPendientes,
    eventosHoy,
    inventarioCritico,
    ventasDelMes: ventasTotal,
    gastosDelMes: gastosTotal,
    utilidadEstimada: ventasTotal - gastosTotal,
    produccionPorCultivo: produccion,
    notificacionesNoLeidas,
  }
}
