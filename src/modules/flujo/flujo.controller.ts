import { Response } from "express"
import { AuthRequest } from "../../types"
import * as flujoService from "./flujo.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { fechaDesde, fechaHasta, tipo, categoria, page, limit } = req.query
  const result = await flujoService.findAll({
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
    tipo: tipo as string | undefined,
    categoria: categoria as string | undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const flujo = await flujoService.findById(id)
  res.json({ success: true, data: flujo })
}

export async function create(req: AuthRequest, res: Response) {
  const flujo = await flujoService.create(req.body)
  res.status(201).json({ success: true, data: flujo })
}

export async function getResumen(req: AuthRequest, res: Response) {
  const { fechaDesde, fechaHasta } = req.query
  const resumen = await flujoService.getResumen({
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
  })
  res.json({ success: true, data: resumen })
}
