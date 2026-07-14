import { z } from "zod"

export const createCategoriaSchema = z.object({
  nombre: z.string().min(2).max(100),
  descripcion: z.string().max(300).optional(),
})

export const updateCategoriaSchema = z.object({
  nombre: z.string().min(2).max(100).optional(),
  descripcion: z.string().max(300).optional(),
})

export type CreateCategoriaInput = z.infer<typeof createCategoriaSchema>
export type UpdateCategoriaInput = z.infer<typeof updateCategoriaSchema>
