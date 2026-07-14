import { z } from "zod"

export const createAsistenciaSchema = z.object({
  fecha: z.coerce.date(),
  horaEntrada: z.string().optional(),
  horaSalida: z.string().optional(),
  presente: z.boolean().optional(),
  justificacion: z.string().optional(),
  trabajadorId: z.number().int().positive(),
})

export const entradaSchema = z.object({
  trabajadorId: z.number().int().positive(),
})

export const salidaSchema = z.object({
  trabajadorId: z.number().int().positive(),
})

export type CreateAsistenciaInput = z.infer<typeof createAsistenciaSchema>
export type EntradaInput = z.infer<typeof entradaSchema>
export type SalidaInput = z.infer<typeof salidaSchema>
