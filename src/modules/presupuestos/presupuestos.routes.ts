import { Router } from "express"
import * as presupuestosController from "./presupuestos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createPresupuestoSchema, updatePresupuestoSchema, updateEstadoSchema } from "./presupuestos.schema"

const router = Router()

router.use(authenticate)

router.get("/", presupuestosController.findAll)
router.get("/:id", presupuestosController.findById)
router.post("/", validate(createPresupuestoSchema), presupuestosController.create)
router.put("/:id", validate(updatePresupuestoSchema), presupuestosController.update)
router.patch("/:id/estado", validate(updateEstadoSchema), presupuestosController.updateEstado)
router.delete("/:id", presupuestosController.remove)

export default router
