import { z } from "zod"

export const createPresupuestoSchema = z.object({
  nombre: z.string().min(2),
  descripcion: z.string().optional(),
  montoTotal: z.number().positive(),
  periodoInicio: z.coerce.date(),
  periodoFin: z.coerce.date(),
  fincaId: z.number().int().positive().optional(),
  partidas: z
    .array(
      z.object({
        concepto: z.string(),
        montoPrevisto: z.number().positive(),
        categoria: z.string().optional(),
      })
    )
    .optional(),
})

export const updatePresupuestoSchema = z.object({
  nombre: z.string().min(2).optional(),
  descripcion: z.string().optional(),
  montoTotal: z.number().positive().optional(),
  periodoInicio: z.coerce.date().optional(),
  periodoFin: z.coerce.date().optional(),
  fincaId: z.number().int().positive().optional(),
})

export const updateEstadoSchema = z.object({
  estado: z.enum(["BORRADOR", "APROBADO", "EJECUTANDO", "CERRADO"]),
})

export type CreatePresupuestoInput = z.infer<typeof createPresupuestoSchema>
export type UpdatePresupuestoInput = z.infer<typeof updatePresupuestoSchema>
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>
