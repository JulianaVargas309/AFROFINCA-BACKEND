import { Request, Response } from "express"
import * as trabajadoresService from "./trabajadores.service"

export async function findAll(_req: Request, res: Response) {
  const trabajadores = await trabajadoresService.findAll()
  res.json({ success: true, data: trabajadores })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const trabajador = await trabajadoresService.findById(id)
  res.json({ success: true, data: trabajador })
}

export async function create(req: Request, res: Response) {
  const trabajador = await trabajadoresService.createTrabajador(req.body)
  res.status(201).json({ success: true, data: trabajador })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const trabajador = await trabajadoresService.updateTrabajador(id, req.body)
  res.json({ success: true, data: trabajador })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const trabajador = await trabajadoresService.deactivateTrabajador(id)
  res.json({ success: true, data: trabajador })
}

export async function search(req: Request, res: Response) {
  const query = req.query.q as string
  if (!query) {
    const trabajadores = await trabajadoresService.findAll()
    res.json({ success: true, data: trabajadores })
    return
  }
  const trabajadores = await trabajadoresService.search(query)
  res.json({ success: true, data: trabajadores })
}
