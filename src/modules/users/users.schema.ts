import { z } from "zod"

export const createUserSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  rol: z.enum(["ADMIN", "FAMILIAR", "CONSULTA"]).default("FAMILIAR"),
})

export const updateUserSchema = z.object({
  nombre: z.string().min(2).max(100).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).max(100).optional(),
  rol: z.enum(["ADMIN", "FAMILIAR", "CONSULTA"]).optional(),
  activo: z.boolean().optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
