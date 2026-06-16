import { z } from "zod"

export const createCultivoSchema = z.object({
  nombre: z.string().min(2).max(200),
  variedad: z.string().max(100).optional(),
  fechaSiembra: z.coerce.date(),
  fechaCosechaEstimada: z.coerce.date().optional(),
  cantidadSembrada: z.number().positive().optional(),
  loteId: z.number().int().positive(),
})

export const updateCultivoSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  variedad: z.string().max(100).optional(),
  fechaSiembra: z.coerce.date().optional(),
  fechaCosechaEstimada: z.coerce.date().optional(),
  fechaCosechaReal: z.coerce.date().optional(),
  estado: z.enum(["activo", "cosechado", "perdido"]).optional(),
  cantidadSembrada: z.number().positive().optional(),
  activo: z.boolean().optional(),
})

export type CreateCultivoInput = z.infer<typeof createCultivoSchema>
export type UpdateCultivoInput = z.infer<typeof updateCultivoSchema>
