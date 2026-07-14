import { Response } from "express"
import { AuthRequest } from "../../types"
import * as alertasService from "./alertas.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { leida } = req.query
  const alertas = await alertasService.findAll(
    leida !== undefined ? leida === "true" : undefined
  )
  res.json({ success: true, data: alertas })
}

export async function marcarLeida(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const alerta = await alertasService.marcarLeida(id)
  res.json({ success: true, data: alerta })
}

export async function generarAlertas(_req: AuthRequest, res: Response) {
  const alertas = await alertasService.generarAlertas()
  res.status(201).json({ success: true, data: alertas })
}
