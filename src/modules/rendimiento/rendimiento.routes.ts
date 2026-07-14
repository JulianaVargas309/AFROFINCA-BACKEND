import { Router } from "express"
import * as rendimientoController from "./rendimiento.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createRendimientoLoteSchema, createRendimientoCultivoSchema } from "./rendimiento.schema"

const router = Router()

router.use(authenticate)

router.get("/lotes", rendimientoController.findAllLotes)
router.get("/lotes/:id", rendimientoController.findByIdLote)
router.post("/lotes", validate(createRendimientoLoteSchema), rendimientoController.createLote)
router.get("/cultivos", rendimientoController.findAllCultivos)
router.get("/cultivos/:id", rendimientoController.findByIdCultivo)
router.post("/cultivos", validate(createRendimientoCultivoSchema), rendimientoController.createCultivo)

export default router
