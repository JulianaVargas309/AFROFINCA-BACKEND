import { z } from "zod"

export const upsertConfigSchema = z.object({
  valor: z.string(),
  tipo: z.string().default("string"),
  descripcion: z.string().optional(),
})

export type UpsertConfigInput = z.infer<typeof upsertConfigSchema>
