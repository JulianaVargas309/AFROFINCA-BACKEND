import { Router } from "express"
import * as recordatoriosController from "./recordatorios.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createRecordatorioSchema, updateRecordatorioSchema } from "./recordatorios.schema"

const router = Router()

router.use(authenticate)

router.get("/", recordatoriosController.findAll)
router.get("/:id", recordatoriosController.findById)
router.post("/", validate(createRecordatorioSchema), recordatoriosController.create)
router.put("/:id", validate(updateRecordatorioSchema), recordatoriosController.update)
router.patch("/:id/enviar", recordatoriosController.marcarEnviado)
router.delete("/:id", recordatoriosController.remove)

export default router
