import { z } from "zod"

export const createProduccionSchema = z.object({
  fecha: z.coerce.date(),
  cantidad: z.number().positive(),
  unidad: z.string().default("kg"),
  calidad: z.string().optional(),
  destino: z.string().optional(),
  observaciones: z.string().optional(),
  temporadaId: z.number().int().positive(),
  cultivoId: z.number().int().positive(),
  loteId: z.number().int().positive(),
})

export const updateProduccionSchema = z.object({
  fecha: z.coerce.date().optional(),
  cantidad: z.number().positive().optional(),
  unidad: z.string().optional(),
  calidad: z.string().optional(),
  destino: z.string().optional(),
  observaciones: z.string().optional(),
  temporadaId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
  loteId: z.number().int().positive().optional(),
})

export type CreateProduccionInput = z.infer<typeof createProduccionSchema>
export type UpdateProduccionInput = z.infer<typeof updateProduccionSchema>
