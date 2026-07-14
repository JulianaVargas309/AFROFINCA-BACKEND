import { Response } from "express"
import { AuthRequest } from "../../types"
import * as notificacionesService from "./notificaciones.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { leida, page, limit } = req.query
  const result = await notificacionesService.findAll(req.user!.id, {
    leida: leida !== undefined ? leida === "true" : undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const notificacion = await notificacionesService.findById(id, req.user!.id)
  res.json({ success: true, data: notificacion })
}

export async function create(req: AuthRequest, res: Response) {
  const notificacion = await notificacionesService.create(req.body)
  res.status(201).json({ success: true, data: notificacion })
}

export async function marcarLeida(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const notificacion = await notificacionesService.marcarLeida(id, req.user!.id)
  res.json({ success: true, data: notificacion })
}

export async function marcarTodasLeidas(req: AuthRequest, res: Response) {
  const result = await notificacionesService.marcarTodasLeidas(req.user!.id)
  res.json({ success: true, data: result })
}

export async function getNoLeidasCount(req: AuthRequest, res: Response) {
  const result = await notificacionesService.getNoLeidasCount(req.user!.id)
  res.json({ success: true, data: result })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await notificacionesService.remove(id, req.user!.id)
  res.json({ success: true, message: "Notificación eliminada" })
}
