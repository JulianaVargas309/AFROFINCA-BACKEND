import { Router } from "express"
import * as auditoriaController from "./auditoria.controller"
import { authenticate } from "../../middleware/auth.middleware"

const router = Router()

router.use(authenticate)

router.get("/", auditoriaController.findAll)
router.get("/:id", auditoriaController.findById)

export default router
