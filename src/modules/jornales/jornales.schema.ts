import { z } from "zod"

export const createJornalSchema = z.object({
  fecha: z.coerce.date(),
  horaInicio: z.string().optional(),
  horaFin: z.string().optional(),
  horas: z.number().positive().optional(),
  actividad: z.string().max(200).optional(),
  tarea: z.string().max(300).optional(),
  valorPagado: z.number().positive().optional(),
  observaciones: z.string().max(500).optional(),
  estado: z.enum(["PENDIENTE", "PAGADO", "ANULADO"]).optional(),
  trabajadorId: z.number().int().positive(),
  loteId: z.number().int().positive(),
  cultivoId: z.number().int().positive().optional(),
})

export const updateJornalSchema = createJornalSchema.partial()

export const updateEstadoSchema = z.object({
  estado: z.enum(["PENDIENTE", "PAGADO", "ANULADO"]),
})

export type CreateJornalInput = z.infer<typeof createJornalSchema>
export type UpdateJornalInput = z.infer<typeof updateJornalSchema>
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>
