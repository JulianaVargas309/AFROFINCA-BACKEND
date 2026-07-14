import { Request, Response } from "express"
import * as recordatoriosService from "./recordatorios.service"

export async function findAll(req: Request, res: Response) {
  const pendientes = req.query.pendientes === "true"
  const { page, limit } = req.query
  const result = await recordatoriosService.findAll(
    pendientes,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const recordatorio = await recordatoriosService.findById(id)
  res.json({ success: true, data: recordatorio })
}

export async function create(req: Request, res: Response) {
  const recordatorio = await recordatoriosService.create(req.body)
  res.status(201).json({ success: true, data: recordatorio })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const recordatorio = await recordatoriosService.update(id, req.body)
  res.json({ success: true, data: recordatorio })
}

export async function marcarEnviado(req: Request, res: Response) {
  const id = Number(req.params.id)
  const recordatorio = await recordatoriosService.marcarEnviado(id)
  res.json({ success: true, data: recordatorio })
}

export async function remove(req: Request, res: Response) {
  await recordatoriosService.remove(Number(req.params.id))
  res.json({ success: true, message: "Recordatorio eliminado" })
}
