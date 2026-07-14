import { Router } from "express"
import * as cajaController from "./caja.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createCajaSchema, updateCajaSchema, createMovimientoSchema } from "./caja.schema"

const router = Router()

router.use(authenticate)

router.get("/cajas", cajaController.findAllCajas)
router.get("/cajas/:id", cajaController.findCajaById)
router.post("/cajas", validate(createCajaSchema), cajaController.createCaja)
router.put("/cajas/:id", validate(updateCajaSchema), cajaController.updateCaja)
router.get("/cajas/:id/saldo", cajaController.getSaldo)
router.get("/movimientos", cajaController.findAllMovimientos)
router.post("/movimientos", validate(createMovimientoSchema), cajaController.createMovimiento)

export default router
