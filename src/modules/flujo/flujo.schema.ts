import { z } from "zod"

export const createFlujoSchema = z.object({
  tipo: z.string(),
  categoria: z.string().optional(),
  monto: z.number().positive(),
  descripcion: z.string().optional(),
  fecha: z.coerce.date().optional(),
})

export type CreateFlujoInput = z.infer<typeof createFlujoSchema>
