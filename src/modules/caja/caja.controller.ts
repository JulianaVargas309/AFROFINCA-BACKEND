import { Response } from "express"
import { AuthRequest } from "../../types"
import * as cajaService from "./caja.service"

export async function findAllCajas(req: AuthRequest, res: Response) {
  const cajas = await cajaService.findAllCajas()
  res.json({ success: true, data: cajas })
}

export async function findCajaById(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const caja = await cajaService.findCajaById(id)
  res.json({ success: true, data: caja })
}

export async function createCaja(req: AuthRequest, res: Response) {
  const caja = await cajaService.createCaja(req.body)
  res.status(201).json({ success: true, data: caja })
}

export async function updateCaja(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const caja = await cajaService.updateCaja(id, req.body)
  res.json({ success: true, data: caja })
}

export async function findAllMovimientos(req: AuthRequest, res: Response) {
  const { cajaId, page, limit } = req.query
  const parsedCajaId = cajaId ? Number(cajaId) : undefined
  const result = await cajaService.findAllMovimientos({
    cajaId: parsedCajaId && !isNaN(parsedCajaId) ? parsedCajaId : undefined,
    page: page ? Number(page) : undefined,
    limit: limit ? Number(limit) : undefined,
  })
  res.json({ success: true, data: result })
}

export async function createMovimiento(req: AuthRequest, res: Response) {
  const movimiento = await cajaService.createMovimiento(req.body, req.user!.id)
  res.status(201).json({ success: true, data: movimiento })
}

export async function getSaldo(req: AuthRequest, res: Response) {
  const id = Number(req.params.id)
  const saldo = await cajaService.getSaldo(id)
  res.json({ success: true, data: saldo })
}
