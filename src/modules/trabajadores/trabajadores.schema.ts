import { z } from "zod"

export const createTrabajadorSchema = z.object({
  nombre: z.string().min(2).max(200),
  telefono: z.string().max(20).optional(),
  direccion: z.string().max(300).optional(),
  tipo: z.enum(["permanente", "temporal"]).default("temporal"),
  salarioBase: z.number().positive().optional(),
})

export const updateTrabajadorSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  telefono: z.string().max(20).optional(),
  direccion: z.string().max(300).optional(),
  tipo: z.enum(["permanente", "temporal"]).optional(),
  salarioBase: z.number().positive().optional(),
  activo: z.boolean().optional(),
})

export type CreateTrabajadorInput = z.infer<typeof createTrabajadorSchema>
export type UpdateTrabajadorInput = z.infer<typeof updateTrabajadorSchema>
