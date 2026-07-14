import { Response } from "express"
import { AuthRequest } from "../../types"
import * as rendimientoService from "./rendimiento.service"

export async function findAllLotes(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await rendimientoService.findAllLotes(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findByIdLote(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const rendimiento = await rendimientoService.findByIdLote(id, req.user!.id)
  res.json({ success: true, data: rendimiento })
}

export async function createLote(req: AuthRequest, res: Response) {
  const rendimiento = await rendimientoService.createLote(req.body, req.user!.id)
  res.status(201).json({ success: true, data: rendimiento })
}

export async function findAllCultivos(req: AuthRequest, res: Response) {
  const { page, limit } = req.query
  const result = await rendimientoService.findAllCultivos(
    req.user!.id,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findByIdCultivo(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const rendimiento = await rendimientoService.findByIdCultivo(id, req.user!.id)
  res.json({ success: true, data: rendimiento })
}

export async function createCultivo(req: AuthRequest, res: Response) {
  const rendimiento = await rendimientoService.createCultivo(req.body, req.user!.id)
  res.status(201).json({ success: true, data: rendimiento })
}
