import { Response } from "express"
import { AuthRequest } from "../../types"
import * as comprasService from "./compras.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await comprasService.findAll(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const compra = await comprasService.findById(id, req.user!.id)
  res.json({ success: true, data: compra })
}

export async function create(req: AuthRequest, res: Response) {
  const compra = await comprasService.createCompra(req.body, req.user!.id)
  res.status(201).json({ success: true, data: compra })
}

export async function updateEstado(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const compra = await comprasService.updateEstado(id, req.user!.id, req.body)
  res.json({ success: true, data: compra })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const compra = await comprasService.deactivateCompra(id, req.user!.id)
  res.json({ success: true, data: compra })
}
