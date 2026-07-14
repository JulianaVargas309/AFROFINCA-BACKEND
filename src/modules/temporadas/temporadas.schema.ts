import { z } from "zod"

export const createTemporadaSchema = z.object({
  nombre: z.string().min(2).max(200),
  descripcion: z.string().optional(),
  fechaInicio: z.coerce.date(),
  fechaFin: z.coerce.date().optional(),
  fincaId: z.number().int().positive(),
})

export const updateTemporadaSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  descripcion: z.string().optional(),
  fechaInicio: z.coerce.date().optional(),
  fechaFin: z.coerce.date().optional(),
  fincaId: z.number().int().positive().optional(),
})

export type CreateTemporadaInput = z.infer<typeof createTemporadaSchema>
export type UpdateTemporadaInput = z.infer<typeof updateTemporadaSchema>
