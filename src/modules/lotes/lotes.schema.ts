import { z } from "zod"

export const createLoteSchema = z.object({
  nombre: z.string().min(2).max(200),
  area: z.number().positive().optional(),
  descripcion: z.string().max(500).optional(),
  fincaId: z.number().int().positive(),
})

export const updateLoteSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  area: z.number().positive().optional(),
  descripcion: z.string().max(500).optional(),
  activo: z.boolean().optional(),
})

export type CreateLoteInput = z.infer<typeof createLoteSchema>
export type UpdateLoteInput = z.infer<typeof updateLoteSchema>
