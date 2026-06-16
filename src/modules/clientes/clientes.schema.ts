import { z } from "zod"

export const createClienteSchema = z.object({
  nombre: z.string().min(2).max(200),
  telefono: z.string().max(20).optional(),
  email: z.string().email().optional().or(z.literal("")),
  direccion: z.string().max(300).optional(),
})

export const updateClienteSchema = z.object({
  nombre: z.string().min(2).max(200).optional(),
  telefono: z.string().max(20).optional(),
  email: z.string().email().optional().or(z.literal("")),
  direccion: z.string().max(300).optional(),
  activo: z.boolean().optional(),
})

export type CreateClienteInput = z.infer<typeof createClienteSchema>
export type UpdateClienteInput = z.infer<typeof updateClienteSchema>
