import { z } from "zod"

export const createCajaSchema = z.object({
  nombre: z.string().min(2),
  descripcion: z.string().optional(),
})

export const updateCajaSchema = createCajaSchema.partial()

export const createMovimientoSchema = z.object({
  tipo: z.enum(["INGRESO", "EGRESO", "TRASLADO"]),
  monto: z.number().positive(),
  concepto: z.string(),
  referencia: z.string().optional(),
  cajaId: z.number().int().positive(),
})

export type CreateCajaInput = z.infer<typeof createCajaSchema>
export type UpdateCajaInput = z.infer<typeof updateCajaSchema>
export type CreateMovimientoInput = z.infer<typeof createMovimientoSchema>
