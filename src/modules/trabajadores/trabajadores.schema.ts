import { z } from "zod"

export const createTrabajadorSchema = z.object({
  nombre: z.string().min(2).max(100),
  apellido: z.string().max(100).optional(),
  documento: z.string().min(5).max(20),
  telefono: z.string().max(20).optional(),
  correo: z.string().email().optional().or(z.literal("")),
  direccion: z.string().max(200).optional(),
  fechaNacimiento: z.coerce.date().optional(),
  eps: z.string().max(100).optional(),
  arl: z.string().max(100).optional(),
  cargo: z.string().max(100).optional(),
  salario: z.number().positive().optional(),
  tipo: z.string().default("temporal"),
  observaciones: z.string().max(500).optional(),
})

export const updateTrabajadorSchema = createTrabajadorSchema.partial()

export type CreateTrabajadorInput = z.infer<typeof createTrabajadorSchema>
export type UpdateTrabajadorInput = z.infer<typeof updateTrabajadorSchema>
