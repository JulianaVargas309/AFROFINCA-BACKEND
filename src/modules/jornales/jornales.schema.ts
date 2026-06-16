import { z } from "zod"

export const createJornalSchema = z.object({
  fecha: z.coerce.date(),
  horas: z.number().positive().optional(),
  tarea: z.string().max(300).optional(),
  montoPagado: z.number().positive().optional(),
  trabajadorId: z.number().int().positive(),
  loteId: z.number().int().positive(),
})

export const updateJornalSchema = z.object({
  fecha: z.coerce.date().optional(),
  horas: z.number().positive().optional(),
  tarea: z.string().max(300).optional(),
  montoPagado: z.number().positive().optional(),
})

export type CreateJornalInput = z.infer<typeof createJornalSchema>
export type UpdateJornalInput = z.infer<typeof updateJornalSchema>
