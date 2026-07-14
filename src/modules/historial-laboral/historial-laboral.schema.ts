import { z } from "zod"

export const createHistorialSchema = z.object({
  tipo: z.string().min(1),
  descripcion: z.string().min(2),
  fecha: z.coerce.date().optional(),
  observaciones: z.string().optional(),
  trabajadorId: z.number().int().positive(),
})

export type CreateHistorialInput = z.infer<typeof createHistorialSchema>
