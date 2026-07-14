import { Request, Response } from "express"
import * as permissionsService from "./permissions.service"

export async function findAll(_req: Request, res: Response) {
  const permissions = await permissionsService.findAll()
  res.json({ success: true, data: permissions })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const permission = await permissionsService.findById(id)
  res.json({ success: true, data: permission })
}

export async function create(req: Request, res: Response) {
  const permission = await permissionsService.create(req.body)
  res.status(201).json({ success: true, data: permission })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const permission = await permissionsService.update(id, req.body)
  res.json({ success: true, data: permission })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const permission = await permissionsService.remove(id)
  res.json({ success: true, data: permission })
}
