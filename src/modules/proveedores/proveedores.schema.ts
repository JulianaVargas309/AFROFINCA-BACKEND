import { z } from "zod"

export const createProveedorSchema = z.object({
  nombre: z.string().min(2).max(200),
  telefono: z.string().max(20).optional(),
  email: z.string().email().optional().or(z.literal("")),
  direccion: z.string().max(300).optional(),
})

export const updateProveedorSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  telefono: z.string().max(20).optional(),
  email: z.string().email().optional().or(z.literal("")),
  direccion: z.string().max(300).optional(),
  activo: z.boolean().optional(),
})

export type CreateProveedorInput = z.infer<typeof createProveedorSchema>
export type UpdateProveedorInput = z.infer<typeof updateProveedorSchema>
