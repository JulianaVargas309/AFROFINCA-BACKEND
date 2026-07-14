import { z } from "zod"

export const createNotificacionSchema = z.object({
  titulo: z.string().min(2),
  mensaje: z.string().optional(),
  tipo: z.enum([
    "INVENTARIO_BAJO",
    "ACTIVIDAD_PROXIMA",
    "PRODUCTO_VENCIDO",
    "JORNAL_PENDIENTE",
    "COMPRA",
    "COSECHA",
    "RECORDATORIO",
    "ALERTA",
  ]),
  link: z.string().optional(),
  userId: z.number().int().positive(),
  recordatorioId: z.number().int().positive().optional(),
})

export type CreateNotificacionInput = z.infer<typeof createNotificacionSchema>
