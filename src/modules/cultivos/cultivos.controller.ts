import { Response } from "express"
import { AuthRequest } from "../../types"
import * as cultivosService from "./cultivos.service"

export async function findAll(req: AuthRequest, res: Response) {
  const loteId = Number(req.query.loteId)
  const cultivos = await cultivosService.findAll(loteId, req.user!.id)
  res.json({ success: true, data: cultivos })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const cultivo = await cultivosService.findById(id, req.user!.id)
  res.json({ success: true, data: cultivo })
}

export async function create(req: AuthRequest, res: Response) {
  const cultivo = await cultivosService.createCultivo(req.body, req.user!.id)
  res.status(201).json({ success: true, data: cultivo })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const cultivo = await cultivosService.updateCultivo(id, req.body, req.user!.id)
  res.json({ success: true, data: cultivo })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const cultivo = await cultivosService.deactivateCultivo(id, req.user!.id)
  res.json({ success: true, data: cultivo })
}
