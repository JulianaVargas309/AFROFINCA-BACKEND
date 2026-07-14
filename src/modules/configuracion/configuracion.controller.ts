import { Response } from "express"
import { AuthRequest } from "../../types"
import * as configuracionService from "./configuracion.service"

export async function findAll(req: AuthRequest, res: Response) {
  const configs = await configuracionService.findAll()
  res.json({ success: true, data: configs })
}

export async function findByLlave(req: AuthRequest, res: Response) {
  const llave = req.params.llave as string
  const config = await configuracionService.findByLlave(llave)
  res.json({ success: true, data: config })
}

export async function upsert(req: AuthRequest, res: Response) {
  const llave = req.params.llave as string
  const config = await configuracionService.upsert(llave, req.body)
  res.json({ success: true, data: config })
}

export async function remove(req: AuthRequest, res: Response) {
  const llave = req.params.llave as string
  await configuracionService.remove(llave)
  res.json({ success: true, message: "Configuración eliminada" })
}
