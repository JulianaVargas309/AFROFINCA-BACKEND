import { Request, Response } from "express"
import * as clientesService from "./clientes.service"

export async function findAll(req: Request, res: Response) {
  const { page, limit } = req.query
  const result = await clientesService.findAll(
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const cliente = await clientesService.findById(id)
  res.json({ success: true, data: cliente })
}

export async function create(req: Request, res: Response) {
  const cliente = await clientesService.createCliente(req.body)
  res.status(201).json({ success: true, data: cliente })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const cliente = await clientesService.updateCliente(id, req.body)
  res.json({ success: true, data: cliente })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const cliente = await clientesService.deactivateCliente(id)
  res.json({ success: true, data: cliente })
}
