import { Response } from "express"
import { AuthRequest } from "../../types"
import * as bitacoraService from "./bitacora.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { loteId, cultivoId, fechaDesde, fechaHasta, actividad, page, limit } = req.query
  const result = await bitacoraService.findAll(req.user!.id, {
    loteId: loteId ? Number(loteId) : undefined,
    cultivoId: cultivoId ? Number(cultivoId) : undefined,
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
    actividad: actividad as string | undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const bitacora = await bitacoraService.findById(id, req.user!.id)
  res.json({ success: true, data: bitacora })
}

export async function create(req: AuthRequest, res: Response) {
  const bitacora = await bitacoraService.createBitacora(req.body, req.user!.id)
  res.status(201).json({ success: true, data: bitacora })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const bitacora = await bitacoraService.updateBitacora(id, req.body, req.user!.id)
  res.json({ success: true, data: bitacora })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await bitacoraService.deleteBitacora(id, req.user!.id)
  res.json({ success: true, message: "Registro de bitácora eliminado" })
}
