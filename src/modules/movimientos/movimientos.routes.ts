import { Router } from "express"
import * as movimientosController from "./movimientos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createMovimientoSchema } from "./movimientos.schema"

const router = Router()

router.use(authenticate)

router.get("/", movimientosController.findAll)
router.post("/", validate(createMovimientoSchema), movimientosController.create)

export default router
