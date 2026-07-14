import { z } from "zod"

export const createAjusteSchema = z.object({
  tipo: z.enum(["entrada", "salida"]),
  cantidad: z.number().positive(),
  motivo: z.string().min(2),
  productoId: z.number().int().positive(),
})

export type CreateAjusteInput = z.infer<typeof createAjusteSchema>
