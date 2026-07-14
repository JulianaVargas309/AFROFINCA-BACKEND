import { Response } from "express"
import { AuthRequest } from "../../types"
import * as actividadesService from "./actividades.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { estado, fincaId, loteId, cultivoId, page, limit } = req.query
  const parsedFincaId = fincaId ? Number(fincaId) : undefined
  const parsedLoteId = loteId ? Number(loteId) : undefined
  const parsedCultivoId = cultivoId ? Number(cultivoId) : undefined
  const result = await actividadesService.findAll(req.user!.id, {
    estado: estado as string | undefined,
    fincaId: parsedFincaId && !isNaN(parsedFincaId) ? parsedFincaId : undefined,
    loteId: parsedLoteId && !isNaN(parsedLoteId) ? parsedLoteId : undefined,
    cultivoId: parsedCultivoId && !isNaN(parsedCultivoId) ? parsedCultivoId : undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const actividad = await actividadesService.findById(id, req.user!.id)
  res.json({ success: true, data: actividad })
}

export async function create(req: AuthRequest, res: Response) {
  const actividad = await actividadesService.create(req.body, req.user!.id)
  res.status(201).json({ success: true, data: actividad })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const actividad = await actividadesService.update(id, req.body, req.user!.id)
  res.json({ success: true, data: actividad })
}

export async function updateEstado(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const { estado } = req.body
  const actividad = await actividadesService.updateEstado(id, estado, req.user!.id)
  res.json({ success: true, data: actividad })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await actividadesService.remove(id, req.user!.id)
  res.json({ success: true, message: "Actividad eliminada" })
}
