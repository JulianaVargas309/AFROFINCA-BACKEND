import { Response } from "express"
import { AuthRequest } from "../../types"
import * as gastosService from "./gastos.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await gastosService.findAll(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const gasto = await gastosService.findById(id, req.user!.id)
  res.json({ success: true, data: gasto })
}

export async function create(req: AuthRequest, res: Response) {
  const gasto = await gastosService.createGasto(req.body, req.user!.id)
  res.status(201).json({ success: true, data: gasto })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const gasto = await gastosService.updateGasto(id, req.body, req.user!.id)
  res.json({ success: true, data: gasto })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await gastosService.deleteGasto(id, req.user!.id)
  res.json({ success: true, message: "Gasto eliminado" })
}
