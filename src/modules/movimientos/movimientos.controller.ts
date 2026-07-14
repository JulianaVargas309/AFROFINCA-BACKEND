import { Response } from "express"
import { AuthRequest } from "../../types"
import * as movimientosService from "./movimientos.service"

export async function findAll(req: AuthRequest, res: Response) {
  const productoId = Number(req.query.productoId)
  const movimientos = await movimientosService.findAll(
    isNaN(productoId) ? 0 : productoId
  )
  res.json({ success: true, data: movimientos })
}

export async function findById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const movimiento = await movimientosService.findById(id)
  res.json({ success: true, data: movimiento })
}

export async function create(req: AuthRequest, res: Response) {
  const movimiento = await movimientosService.createMovimiento(req.body, req.user!.id)
  res.status(201).json({ success: true, data: movimiento })
}

export async function remove(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  await movimientosService.deleteMovimiento(id)
  res.json({ success: true, message: "Movimiento eliminado" })
}
