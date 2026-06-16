import { z } from "zod"

export const createFincaSchema = z.object({
  nombre: z.string().min(2).max(200),
  ubicacion: z.string().max(300).optional(),
  hectareas: z.number().positive().optional(),
  descripcion: z.string().max(500).optional(),
})

export const updateFincaSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  ubicacion: z.string().max(300).optional(),
  hectareas: z.number().positive().optional(),
  descripcion: z.string().max(500).optional(),
  activo: z.boolean().optional(),
})

export type CreateFincaInput = z.infer<typeof createFincaSchema>
export type UpdateFincaInput = z.infer<typeof updateFincaSchema>
