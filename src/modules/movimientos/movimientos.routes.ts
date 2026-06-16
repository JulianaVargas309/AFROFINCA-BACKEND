import { Router } from "express"
import * as movimientosController from "./movimientos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createMovimientoSchema } from "./movimientos.schema"

const router = Router()

router.use(authenticate)

router.get("/", movimientosController.findAll)
router.get("/:id", movimientosController.findById)
router.post("/", validate(createMovimientoSchema), movimientosController.create)
router.delete("/:id", movimientosController.remove)

export default router
