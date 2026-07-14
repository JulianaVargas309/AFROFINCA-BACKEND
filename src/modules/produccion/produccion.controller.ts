import { Response } from "express"
import { AuthRequest } from "../../types"
import * as produccionService from "./produccion.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { cultivoId, loteId, temporadaId, fechaDesde, fechaHasta, page, limit } = req.query
  const parsedCultivoId = cultivoId ? Number(cultivoId) : undefined
  const parsedLoteId = loteId ? Number(loteId) : undefined
  const parsedTemporadaId = temporadaId ? Number(temporadaId) : undefined
  const result = await produccionService.findAll(req.user!.id, {
    cultivoId: parsedCultivoId && !isNaN(parsedCultivoId) ? parsedCultivoId : undefined,
    loteId: parsedLoteId && !isNaN(parsedLoteId) ? parsedLoteId : undefined,
    temporadaId: parsedTemporadaId && !isNaN(parsedTemporadaId) ? parsedTemporadaId : undefined,
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const produccion = await produccionService.findById(id, req.user!.id)
  res.json({ success: true, data: produccion })
}

export async function create(req: AuthRequest, res: Response) {
  const produccion = await produccionService.create(req.body, req.user!.id)
  res.status(201).json({ success: true, data: produccion })
}

export async function update(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const produccion = await produccionService.update(id, req.body, req.user!.id)
  res.json({ success: true, data: produccion })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await produccionService.remove(id, req.user!.id)
  res.json({ success: true, message: "Registro de producción eliminado" })
}
