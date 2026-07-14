import { z } from "zod"

export const createAuditoriaSchema = z.object({
  accion: z.string().min(1).max(100),
  entidad: z.string().min(1).max(100),
  entidadId: z.number().int().positive().optional(),
  detalle: z.string().optional(),
  ip: z.string().optional(),
  userAgent: z.string().optional(),
})

export type CreateAuditoriaInput = z.infer<typeof createAuditoriaSchema>
