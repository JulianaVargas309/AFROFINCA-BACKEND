import { Request, Response } from "express"
import * as categoriasService from "./categorias.service"

export async function findAll(_req: Request, res: Response) {
  const categorias = await categoriasService.findAll()
  res.json({ success: true, data: categorias })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const categoria = await categoriasService.findById(id)
  res.json({ success: true, data: categoria })
}

export async function create(req: Request, res: Response) {
  const categoria = await categoriasService.createCategoria(req.body)
  res.status(201).json({ success: true, data: categoria })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const categoria = await categoriasService.updateCategoria(id, req.body)
  res.json({ success: true, data: categoria })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const categoria = await categoriasService.deactivateCategoria(id)
  res.json({ success: true, data: categoria })
}
