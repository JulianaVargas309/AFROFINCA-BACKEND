import { Router } from "express"
import * as alertasController from "./alertas.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createAlertaSchema } from "./alertas.schema"

const router = Router()

router.use(authenticate)

router.get("/", alertasController.findAll)
router.patch("/:id/leer", alertasController.marcarLeida)
router.post("/generar", alertasController.generarAlertas)

export default router
