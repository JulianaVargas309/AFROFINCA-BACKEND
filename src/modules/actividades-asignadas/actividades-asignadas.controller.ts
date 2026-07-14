import { Request, Response } from "express"
import * as actividadesService from "./actividades-asignadas.service"

export async function findAll(req: Request, res: Response) {
  const { trabajadorId: rawTid, estado, prioridad, page, limit } = req.query
  const trabajadorId = rawTid ? Number(rawTid) : undefined
  const result = await actividadesService.findAll({
    trabajadorId: trabajadorId && !isNaN(trabajadorId) ? trabajadorId : undefined,
    estado: estado as string | undefined,
    prioridad: prioridad as string | undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const actividad = await actividadesService.findById(id)
  res.json({ success: true, data: actividad })
}

export async function create(req: Request, res: Response) {
  const actividad = await actividadesService.create(req.body)
  res.status(201).json({ success: true, data: actividad })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const actividad = await actividadesService.update(id, req.body)
  res.json({ success: true, data: actividad })
}

export async function remove(req: Request, res: Response) {
  await actividadesService.remove(Number(req.params.id))
  res.json({ success: true, message: "Actividad asignada eliminada" })
}
