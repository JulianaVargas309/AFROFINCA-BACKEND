import { z } from "zod"

export const createActividadAsignadaSchema = z.object({
  titulo: z.string().min(2),
  descripcion: z.string().optional(),
  estado: z.enum(["PENDIENTE", "EN_PROCESO", "FINALIZADA", "CANCELADA"]).default("PENDIENTE"),
  fechaAsignacion: z.coerce.date().optional(),
  fechaInicio: z.coerce.date().optional(),
  fechaFin: z.coerce.date().optional(),
  prioridad: z.enum(["BAJA", "MEDIA", "ALTA", "CRITICA"]).default("MEDIA"),
  trabajadorId: z.number().int().positive(),
  loteId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
})

export const updateActividadAsignadaSchema = z.object({
  titulo: z.string().min(2).optional(),
  descripcion: z.string().optional(),
  estado: z.enum(["PENDIENTE", "EN_PROCESO", "FINALIZADA", "CANCELADA"]).optional(),
  fechaInicio: z.coerce.date().optional(),
  fechaFin: z.coerce.date().optional(),
  prioridad: z.enum(["BAJA", "MEDIA", "ALTA", "CRITICA"]).optional(),
  loteId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
})

export type CreateActividadAsignadaInput = z.infer<typeof createActividadAsignadaSchema>
export type UpdateActividadAsignadaInput = z.infer<typeof updateActividadAsignadaSchema>
