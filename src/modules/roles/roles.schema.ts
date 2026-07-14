import { z } from "zod"

export const createRoleSchema = z.object({
  nombre: z.string().min(2).max(100),
  descripcion: z.string().optional(),
  nivel: z.number().int().min(0).default(0),
  permissionIds: z.array(z.number().int().positive()).optional(),
})

export const updateRoleSchema = createRoleSchema.partial()

export type CreateRoleInput = z.infer<typeof createRoleSchema>
export type UpdateRoleInput = z.infer<typeof updateRoleSchema>
