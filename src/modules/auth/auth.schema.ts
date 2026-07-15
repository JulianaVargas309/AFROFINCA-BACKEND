import { z } from "zod"

export const registerSchema = z.object({
  documento: z.string().min(6).max(12),
  correo: z.string().email().optional().or(z.literal("")),
  telefono: z.string().max(20).optional(),
  rol: z.enum(["ADMIN", "FAMILIAR", "TRABAJADOR", "CONSULTA"]).optional().default("FAMILIAR"),
})

export const loginSchema = z.object({
  documento: z.string().min(1),
  password: z.string().min(1),
})

export const refreshSchema = z.object({
  refreshToken: z.string().min(1),
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type RefreshInput = z.infer<typeof refreshSchema>
