import { z } from "zod"

export const createRendimientoLoteSchema = z.object({
  temporada: z.string().optional(),
  areaCultivada: z.number().positive().optional(),
  produccionTotal: z.number().positive(),
  rendimiento: z.number().optional(),
  unidad: z.string().default("kg/ha"),
  observaciones: z.string().optional(),
  loteId: z.number().int().positive(),
})

export const createRendimientoCultivoSchema = z.object({
  temporada: z.string().optional(),
  areaCultivada: z.number().positive().optional(),
  produccionTotal: z.number().positive(),
  rendimiento: z.number().optional(),
  unidad: z.string().default("kg/ha"),
  observaciones: z.string().optional(),
  cultivoId: z.number().int().positive(),
})

export type CreateRendimientoLoteInput = z.infer<typeof createRendimientoLoteSchema>
export type CreateRendimientoCultivoInput = z.infer<typeof createRendimientoCultivoSchema>
