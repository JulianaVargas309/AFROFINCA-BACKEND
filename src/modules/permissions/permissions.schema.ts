import { z } from "zod"

export const createPermissionSchema = z.object({
  nombre: z.string().min(2).max(100),
  descripcion: z.string().optional(),
  modulo: z.string().optional(),
})

export const updatePermissionSchema = createPermissionSchema.partial()

export type CreatePermissionInput = z.infer<typeof createPermissionSchema>
export type UpdatePermissionInput = z.infer<typeof updatePermissionSchema>
