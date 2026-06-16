import { Response } from "express"
import { AuthRequest } from "../../types"
import * as movimientosService from "./movimientos.service"

export async function findAll(req: AuthRequest, res: Response) {
  const productoId = Number(req.query.productoId)
  const movimientos = await movimientosService.findAll(productoId)
  res.json({ success: true, data: movimientos })
}

export async function create(req: AuthRequest, res: Response) {
  const movimiento = await movimientosService.createMovimiento(req.body, req.user!.id)
  res.status(201).json({ success: true, data: movimiento })
}
