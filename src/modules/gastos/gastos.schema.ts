import { z } from "zod"

export const createGastoSchema = z.object({
  descripcion: z.string().min(2).max(500),
  monto: z.number().positive(),
  categoria: z
    .enum(["INSUMOS", "MANO_DE_OBRA", "MANTENIMIENTO", "TRANSPORTE", "ADMINISTRACION", "OTRO"])
    .optional(),
  fecha: z.coerce.date().optional(),
  proveedorId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
  fincaId: z.number().int().positive().optional(),
  loteId: z.number().int().positive().optional(),
})

export const updateGastoSchema = z.object({
  descripcion: z.string().min(2).max(500).optional(),
  monto: z.number().positive().optional(),
  categoria: z
    .enum(["INSUMOS", "MANO_DE_OBRA", "MANTENIMIENTO", "TRANSPORTE", "ADMINISTRACION", "OTRO"])
    .optional(),
  fecha: z.coerce.date().optional(),
  proveedorId: z.number().int().positive().optional().nullable(),
  cultivoId: z.number().int().positive().optional().nullable(),
  fincaId: z.number().int().positive().optional().nullable(),
  loteId: z.number().int().positive().optional().nullable(),
})

export type CreateGastoInput = z.infer<typeof createGastoSchema>
export type UpdateGastoInput = z.infer<typeof updateGastoSchema>
