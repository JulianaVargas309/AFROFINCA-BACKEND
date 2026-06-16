import { Response } from "express"
import { AuthRequest } from "../../types"
import * as jornalesService from "./jornales.service"

export async function findAll(req: AuthRequest, res: Response) {
  const trabajadorId = Number(req.query.trabajadorId)
  const jornales = await jornalesService.findAll(trabajadorId, req.user!.id)
  res.json({ success: true, data: jornales })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const jornal = await jornalesService.findById(id, req.user!.id)
  res.json({ success: true, data: jornal })
}

export async function create(req: AuthRequest, res: Response) {
  const jornal = await jornalesService.createJornal(req.body, req.user!.id)
  res.status(201).json({ success: true, data: jornal })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const jornal = await jornalesService.updateJornal(id, req.body, req.user!.id)
  res.json({ success: true, data: jornal })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await jornalesService.deleteJornal(id, req.user!.id)
  res.json({ success: true, message: "Jornal eliminado" })
}
