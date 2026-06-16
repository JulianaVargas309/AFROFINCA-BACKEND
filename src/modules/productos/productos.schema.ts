import { z } from "zod"

export const createProductoSchema = z.object({
  nombre: z.string().min(2).max(200),
  descripcion: z.string().max(500).optional(),
  categoria: z.string().max(100).optional(),
  unidadMedida: z.string().max(50).default("unidad"),
  stockActual: z.number().min(0).default(0),
  stockMinimo: z.number().min(0).default(0),
  precioUnitario: z.number().positive().optional(),
})

export const updateProductoSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  descripcion: z.string().max(500).optional(),
  categoria: z.string().max(100).optional(),
  unidadMedida: z.string().max(50).optional(),
  stockActual: z.number().min(0).optional(),
  stockMinimo: z.number().min(0).optional(),
  precioUnitario: z.number().positive().optional(),
  activo: z.boolean().optional(),
})

export type CreateProductoInput = z.infer<typeof createProductoSchema>
export type UpdateProductoInput = z.infer<typeof updateProductoSchema>
