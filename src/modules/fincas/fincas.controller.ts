import { Response } from "express"
import { AuthRequest } from "../../types"
import * as fincasService from "./fincas.service"

export async function findAll(req: AuthRequest, res: Response) {
  const fincas = await fincasService.findAll(req.user!.id)
  res.json({ success: true, data: fincas })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const finca = await fincasService.findById(id, req.user!.id)
  res.json({ success: true, data: finca })
}

export async function create(req: AuthRequest, res: Response) {
  const finca = await fincasService.createFinca(req.body, req.user!.id)
  res.status(201).json({ success: true, data: finca })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const finca = await fincasService.updateFinca(id, req.body, req.user!.id)
  res.json({ success: true, data: finca })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const finca = await fincasService.deactivateFinca(id, req.user!.id)
  res.json({ success: true, data: finca })
}
