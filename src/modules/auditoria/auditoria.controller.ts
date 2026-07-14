import { Response } from "express"
import { AuthRequest } from "../../types"
import * as auditoriaService from "./auditoria.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { entidad, accion, fechaDesde, fechaHasta, page, limit } = req.query
  const result = await auditoriaService.findAll({
    entidad: entidad as string | undefined,
    accion: accion as string | undefined,
    fechaDesde: fechaDesde as string | undefined,
    fechaHasta: fechaHasta as string | undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const auditoria = await auditoriaService.findById(id)
  res.json({ success: true, data: auditoria })
}
