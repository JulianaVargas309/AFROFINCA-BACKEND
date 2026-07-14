import { Request, Response } from "express"
import * as rolesService from "./roles.service"

export async function findAll(_req: Request, res: Response) {
  const roles = await rolesService.findAll()
  res.json({ success: true, data: roles })
}

export async function findById(req: Request, res: Response) {
  const id = Number(req.params.id)
  const role = await rolesService.findById(id)
  res.json({ success: true, data: role })
}

export async function create(req: Request, res: Response) {
  const role = await rolesService.create(req.body)
  res.status(201).json({ success: true, data: role })
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)
  const role = await rolesService.update(id, req.body)
  res.json({ success: true, data: role })
}

export async function remove(req: Request, res: Response) {
  const id = Number(req.params.id)
  const role = await rolesService.remove(id)
  res.json({ success: true, data: role })
}
