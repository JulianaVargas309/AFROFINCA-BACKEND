import { z } from "zod"

export const createEventoSchema = z.object({
  titulo: z.string().min(2),
  descripcion: z.string().optional(),
  tipo: z.enum([
    "SIEMBRA",
    "FERTILIZACION",
    "RIEGO",
    "FUMIGACION",
    "PODA",
    "COSECHA",
    "COMPRA",
    "PAGO",
    "JORNAL",
    "MANTENIMIENTO",
    "OTRO",
  ]),
  fechaInicio: z.coerce.date(),
  fechaFin: z.coerce.date().optional(),
  todoElDia: z.boolean().optional(),
  estado: z.string().default("PENDIENTE"),
  prioridad: z.enum(["BAJA", "MEDIA", "ALTA", "CRITICA"]).default("MEDIA"),
  color: z.string().optional(),
  ubicacion: z.string().optional(),
  fincaId: z.number().int().positive().optional(),
  loteId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
})

export const updateEventoSchema = z.object({
  titulo: z.string().min(2).optional(),
  descripcion: z.string().optional(),
  tipo: z
    .enum([
      "SIEMBRA",
      "FERTILIZACION",
      "RIEGO",
      "FUMIGACION",
      "PODA",
      "COSECHA",
      "COMPRA",
      "PAGO",
      "JORNAL",
      "MANTENIMIENTO",
      "OTRO",
    ])
    .optional(),
  fechaInicio: z.coerce.date().optional(),
  fechaFin: z.coerce.date().optional(),
  todoElDia: z.boolean().optional(),
  estado: z.string().optional(),
  prioridad: z.enum(["BAJA", "MEDIA", "ALTA", "CRITICA"]).optional(),
  color: z.string().optional(),
  ubicacion: z.string().optional(),
  fincaId: z.number().int().positive().optional(),
  loteId: z.number().int().positive().optional(),
  cultivoId: z.number().int().positive().optional(),
})

export type CreateEventoInput = z.infer<typeof createEventoSchema>
export type UpdateEventoInput = z.infer<typeof updateEventoSchema>
