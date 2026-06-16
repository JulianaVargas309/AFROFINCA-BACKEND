import { z } from "zod"

export const createBitacoraSchema = z.object({
  fecha: z.coerce.date(),
  actividad: z.enum([
    "FERTILIZACION",
    "FUMIGACION",
    "PODA",
    "DESHIERBE",
    "COSECHA",
    "SIEMBRA",
    "MANTENIMIENTO",
    "OTRO",
  ]),
  descripcion: z.string().min(2).max(1000),
  cantidad: z.number().positive().optional(),
  unidadMedida: z.string().max(20).optional(),
  costo: z.number().min(0).default(0),
  observaciones: z.string().max(1000).optional(),
  loteId: z.number().int().positive(),
  cultivoId: z.number().int().positive().optional(),
  productoId: z.number().int().positive().optional(),
})

export const updateBitacoraSchema = z.object({
  fecha: z.coerce.date().optional(),
  actividad: z
    .enum([
      "FERTILIZACION",
      "FUMIGACION",
      "PODA",
      "DESHIERBE",
      "COSECHA",
      "SIEMBRA",
      "MANTENIMIENTO",
      "OTRO",
    ])
    .optional(),
  descripcion: z.string().min(2).max(1000).optional(),
  cantidad: z.number().positive().optional(),
  unidadMedida: z.string().max(20).optional(),
  costo: z.number().min(0).optional(),
  observaciones: z.string().max(1000).optional(),
  cultivoId: z.number().int().positive().optional(),
  productoId: z.number().int().positive().optional(),
})

export type CreateBitacoraInput = z.infer<typeof createBitacoraSchema>
export type UpdateBitacoraInput = z.infer<typeof updateBitacoraSchema>
