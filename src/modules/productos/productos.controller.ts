import { Request, Response } from "express"
import * as productosService from "./productos.service"

export async function findAll(req: Request, res: Response) {
  const { page, limit } = req.query
  const result = await productosService.findAll(
    page ? Number(page) : undefined,
    limit ? Number(limit) : undefined
  )
  res.json({ success: true, data: result })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const producto = await productosService.findById(id)
  res.json({ success: true, data: producto })
}

export async function create(req: Request, res: Response) {
  const producto = await productosService.createProducto(req.body)
  res.status(201).json({ success: true, data: producto })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const producto = await productosService.updateProducto(id, req.body)
  res.json({ success: true, data: producto })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const producto = await productosService.deactivateProducto(id)
  res.json({ success: true, data: producto })
}
