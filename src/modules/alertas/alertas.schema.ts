import { z } from "zod"

export const createAlertaSchema = z.object({
  mensaje: z.string().min(2).max(500),
  tipo: z.string().default("BAJO_STOCK"),
  productoId: z.number().int().positive(),
})

export type CreateAlertaInput = z.infer<typeof createAlertaSchema>
