import { Request, Response } from "express"
import * as historialService from "./historial-laboral.service"

export async function findAll(req: Request, res: Response) {
  const trabajadorId = req.query.trabajadorId ? Number(req.query.trabajadorId) : undefined
  const { page, limit } = req.query
  const result = await historialService.findAll(
    trabajadorId && !isNaN(trabajadorId) ? trabajadorId : undefined,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const historial = await historialService.findById(id)
  res.json({ success: true, data: historial })
}

export async function create(req: Request, res: Response) {
  const historial = await historialService.create(req.body)
  res.status(201).json({ success: true, data: historial })
}
