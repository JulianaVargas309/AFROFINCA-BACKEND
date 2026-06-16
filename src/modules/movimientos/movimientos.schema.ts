import { z } from "zod"

export const createMovimientoSchema = z.object({
  tipo: z.enum(["entrada", "salida"]),
  cantidad: z.number().positive(),
  motivo: z.string().max(300).optional(),
  productoId: z.number().int().positive(),
})

export type CreateMovimientoInput = z.infer<typeof createMovimientoSchema>
