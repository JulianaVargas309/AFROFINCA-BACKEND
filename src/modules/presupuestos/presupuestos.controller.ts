import { Response } from "express"
import { AuthRequest } from "../../types"
import * as presupuestosService from "./presupuestos.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await presupuestosService.findAll(req.user!.id, {
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const presupuesto = await presupuestosService.findById(id, req.user!.id)
  res.json({ success: true, data: presupuesto })
}

export async function create(req: AuthRequest, res: Response) {
  const presupuesto = await presupuestosService.create(req.body, req.user!.id)
  res.status(201).json({ success: true, data: presupuesto })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const presupuesto = await presupuestosService.update(id, req.body, req.user!.id)
  res.json({ success: true, data: presupuesto })
}

export async function updateEstado(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const { estado } = req.body
  const presupuesto = await presupuestosService.updateEstado(id, estado, req.user!.id)
  res.json({ success: true, data: presupuesto })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await presupuestosService.remove(id, req.user!.id)
  res.json({ success: true, message: "Presupuesto eliminado" })
}
