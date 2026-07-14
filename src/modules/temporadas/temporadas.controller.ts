import { Response } from "express"
import { AuthRequest } from "../../types"
import * as temporadasService from "./temporadas.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await temporadasService.findAll(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const temporada = await temporadasService.findById(id, req.user!.id)
  res.json({ success: true, data: temporada })
}

export async function create(req: AuthRequest, res: Response) {
  const temporada = await temporadasService.create(req.body, req.user!.id)
  res.status(201).json({ success: true, data: temporada })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const temporada = await temporadasService.update(id, req.body, req.user!.id)
  res.json({ success: true, data: temporada })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await temporadasService.remove(id, req.user!.id)
  res.json({ success: true, message: "Temporada desactivada" })
}
