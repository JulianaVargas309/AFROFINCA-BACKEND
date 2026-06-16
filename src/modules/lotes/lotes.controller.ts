import { Response } from "express"
import { AuthRequest } from "../../types"
import * as lotesService from "./lotes.service"

export async function findAll(req: AuthRequest, res: Response) {
  const fincaId = Number(req.query.fincaId)
  const lotes = await lotesService.findAll(fincaId, req.user!.id)
  res.json({ success: true, data: lotes })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const lote = await lotesService.findById(id, req.user!.id)
  res.json({ success: true, data: lote })
}

export async function create(req: AuthRequest, res: Response) {
  const lote = await lotesService.createLote(req.body, req.user!.id)
  res.status(201).json({ success: true, data: lote })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const lote = await lotesService.updateLote(id, req.body, req.user!.id)
  res.json({ success: true, data: lote })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const lote = await lotesService.deactivateLote(id, req.user!.id)
  res.json({ success: true, data: lote })
}
