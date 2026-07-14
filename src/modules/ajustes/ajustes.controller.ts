import { Response } from "express"
import { AuthRequest } from "../../types"
import * as ajustesService from "./ajustes.service"

export async function findAll(req: AuthRequest, res: Response) {
  const { productoId, page, limit } = req.query
  const result = await ajustesService.findAll(
    productoId ? Number(productoId) : undefined,
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function create(req: AuthRequest, res: Response) {
  const ajuste = await ajustesService.createAjuste(req.body, req.user!.id)
  res.status(201).json({ success: true, data: ajuste })
}
