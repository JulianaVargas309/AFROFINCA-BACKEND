import { z } from "zod"

export const detalleCompraSchema = z.object({
  productoId: z.number().int().positive(),
  cantidad: z.number().positive(),
  precioUnitario: z.number().positive(),
})

export const createCompraSchema = z.object({
  numeroFactura: z.string().optional(),
  fecha: z.coerce.date().optional(),
  proveedorId: z.number().int().positive().optional(),
  detalles: z.array(detalleCompraSchema).min(1),
  observaciones: z.string().optional(),
})

export const updateEstadoSchema = z.object({
  estado: z.enum(["PENDIENTE", "COMPLETADA", "ANULADA"]),
})

export type CreateCompraInput = z.infer<typeof createCompraSchema>
export type UpdateEstadoInput = z.infer<typeof updateEstadoSchema>
