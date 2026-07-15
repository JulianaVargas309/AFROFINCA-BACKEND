import { z } from "zod"

export const createUserSchema = z.object({
  nombre: z.string().min(2).max(100).optional(),
  documento: z.string().min(1),
  password: z.string().min(6).max(100),
  correo: z.string().email().optional().or(z.literal("")),
  telefono: z.string().max(20).optional(),
  rol: z.enum(["ADMIN", "FAMILIAR", "TRABAJADOR", "CONSULTA"]).default("FAMILIAR"),
})

export const updateUserSchema = z.object({
  nombre: z.string().min(2).max(100).optional(),
  apellido: z.string().max(100).optional(),
  correo: z.string().email().optional().or(z.literal("")),
  telefono: z.string().max(20).optional(),
  foto: z.string().optional(),
  roleId: z.number().int().positive().optional().nullable(),
  activo: z.boolean().optional(),
})

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6).max(100),
})

export const changeRolSchema = z.object({
  rol: z.enum(["ADMIN", "FAMILIAR", "TRABAJADOR", "CONSULTA"]),
  roleId: z.number().int().positive().optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type UpdateUserInput = z.infer<typeof updateUserSchema>
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>
export type ChangeRolInput = z.infer<typeof changeRolSchema>
