import { Response } from "express"
import { AuthRequest } from "../../types"
import * as calendarioService from "./calendario.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { fechaDesde, fechaHasta, tipo, fincaId: rawFid, loteId: rawLid } = req.query
  const fincaId = rawFid ? Number(rawFid) : undefined
  const loteId = rawLid ? Number(rawLid) : undefined
  const result = await calendarioService.findAll({
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
    tipo: tipo as string | undefined,
    userId: req.user!.id,
    fincaId: fincaId && !isNaN(fincaId) ? fincaId : undefined,
    loteId: loteId && !isNaN(loteId) ? loteId : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const evento = await calendarioService.findById(id)
  res.json({ success: true, data: evento })
}

export async function create(req: AuthRequest, res: Response) {
  const evento = await calendarioService.create(req.body, req.user!.id)
  res.status(201).json({ success: true, data: evento })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const evento = await calendarioService.update(id, req.body, req.user!.id)
  res.json({ success: true, data: evento })
}

export async function remove(req: AuthRequest, res: Response) {
  await calendarioService.remove(Number(req.params.id), req.user!.id)
  res.json({ success: true, message: "Evento eliminado" })
}
