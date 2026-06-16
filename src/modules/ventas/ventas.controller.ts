import { Response } from "express"
import { AuthRequest } from "../../types"
import * as ventasService from "./ventas.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await ventasService.findAll(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const venta = await ventasService.findById(id, req.user!.id)
  res.json({ success: true, data: venta })
}

export async function create(req: AuthRequest, res: Response) {
  const venta = await ventasService.createVenta(req.body, req.user!.id)
  res.status(201).json({ success: true, data: venta })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const venta = await ventasService.updateVenta(id, req.body, req.user!.id)
  res.json({ success: true, data: venta })
}
