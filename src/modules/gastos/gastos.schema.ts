import { z } from "zod"

export const createGastroSchema = z.object({
  descripcion: z.string().min(2).max(500),
  monto: z.number().positive(),
  categoria: z.string().max(100).optional(),
  fecha: z.coerce.date().optional(),
  proveedorId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
  fincaId: z.number().int().positive().optional(),
})

export const updateGastroSchema = z.object({
  descripcion: z.string().min(2).max(500).optional(),
  monto: z.number().positive().optional(),
  categoria: z.string().max(100).optional(),
  fecha: z.coerce.date().optional(),
  proveedorId: z.number().int().positive().optional().nullable(),
  cultivoId: z.number().int().positive().optional().nullable(),
  fincaId: z.number().int().positive().optional().nullable(),
})

export type CreateGastoInput = z.infer<typeof createGastroSchema>
export type UpdateGastoInput = z.infer<typeof updateGastroSchema>
