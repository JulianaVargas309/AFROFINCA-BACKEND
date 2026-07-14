import { z } from "zod"

export const createActividadSchema = z.object({
  titulo: z.string().min(2),
  descripcion: z.string().optional(),
  estado: z.enum(["PENDIENTE", "EN_PROCESO", "FINALIZADA", "CANCELADA"]).default("PENDIENTE"),
  fechaInicio: z.coerce.date().optional(),
  fechaFin: z.coerce.date().optional(),
  tiempoInvertido: z.number().int().positive().optional(),
  costo: z.number().positive().optional(),
  loteId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
  fincaId: z.number().int().positive().optional(),
  evidencias: z
    .array(
      z.object({
        url: z.string(),
        tipo: z.string().default("imagen"),
        descripcion: z.string().optional(),
      })
    )
    .optional(),
  productosUtilizados: z
    .array(
      z.object({
        productoId: z.number().int().positive(),
        cantidad: z.number().positive(),
      })
    )
    .optional(),
})

export const updateActividadSchema = createActividadSchema.partial()

export const updateEstadoSchema = z.object({
  estado: z.enum(["PENDIENTE", "EN_PROCESO", "FINALIZADA", "CANCELADA"]),
})

export type CreateActividadInput = z.infer<typeof createActividadSchema>
export type UpdateActividadInput = z.infer<typeof updateActividadSchema>
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>
