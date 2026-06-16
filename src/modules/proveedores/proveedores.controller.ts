import { Request, Response } from "express"
import * as proveedoresService from "./proveedores.service"

export async function findAll(_req: Request, res: Response) {
  const proveedores = await proveedoresService.findAll()
  res.json({ success: true, data: proveedores })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const proveedor = await proveedoresService.findById(id)
  res.json({ success: true, data: proveedor })
}

export async function create(req: Request, res: Response) {
  const proveedor = await proveedoresService.createProveedor(req.body)
  res.status(201).json({ success: true, data: proveedor })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const proveedor = await proveedoresService.updateProveedor(id, req.body)
  res.json({ success: true, data: proveedor })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const proveedor = await proveedoresService.deactivateProveedor(id)
  res.json({ success: true, data: proveedor })
}
