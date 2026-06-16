import { z } from "zod"

export const detalleVentaSchema = z.object({
  productoId: z.number().int().positive(),
  cantidad: z.number().positive(),
  precioUnitario: z.number().positive(),
})

export const createVentaSchema = z.object({
  clienteId: z.number().int().positive(),
  detalles: z.array(detalleVentaSchema).min(1),
})

export const updateVentaSchema = z.object({
  estado: z.enum(["pendiente", "completada", "anulada"]),
})

export type CreateVentaInput = z.infer<typeof createVentaSchema>
export type UpdateVentaInput = z.infer<typeof updateVentaSchema>
