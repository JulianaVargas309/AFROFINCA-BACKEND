import { Request, Response } from "express"
import * as asistenciasService from "./asistencias.service"

export async function findAll(req: Request, res: Response) {
  const { fecha, trabajadorId: rawTid, page, limit } = req.query
  const trabajadorId = rawTid ? Number(rawTid) : undefined
  const result = await asistenciasService.findAll(
    fecha as string | undefined,
    trabajadorId && !isNaN(trabajadorId) ? trabajadorId : undefined,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const asistencia = await asistenciasService.findById(id)
  res.json({ success: true, data: asistencia })
}

export async function createOrUpdate(req: Request, res: Response) {
  const asistencia = await asistenciasService.createOrUpdate(req.body)
  res.status(201).json({ success: true, data: asistencia })
}

export async function marcarEntrada(req: Request, res: Response) {
  const { trabajadorId } = req.body
  const asistencia = await asistenciasService.marcarEntrada(trabajadorId)
  res.json({ success: true, data: asistencia })
}

export async function marcarSalida(req: Request, res: Response) {
  const { trabajadorId } = req.body
  const asistencia = await asistenciasService.marcarSalida(trabajadorId)
  res.json({ success: true, data: asistencia })
}
