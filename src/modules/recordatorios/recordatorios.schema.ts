import { z } from "zod"

export const createRecordatorioSchema = z.object({
  titulo: z.string().min(2),
  mensaje: z.string().optional(),
  fecha: z.coerce.date(),
  eventoId: z.number().int().positive().optional(),
})

export const updateRecordatorioSchema = z.object({
  titulo: z.string().min(2).optional(),
  mensaje: z.string().optional(),
  fecha: z.coerce.date().optional(),
  eventoId: z.number().int().positive().optional(),
})

export type CreateRecordatorioInput = z.infer<typeof createRecordatorioSchema>
export type UpdateRecordatorioInput = z.infer<typeof updateRecordatorioSchema>
