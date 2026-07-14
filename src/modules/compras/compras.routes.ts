import { Router } from "express"
import * as comprasController from "./compras.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createCompraSchema, updateEstadoSchema } from "./compras.schema"

const router = Router()

router.use(authenticate)

router.get("/", comprasController.findAll)
router.get("/:id", comprasController.findById)
router.post("/", validate(createCompraSchema), comprasController.create)
router.patch("/:id/estado", validate(updateEstadoSchema), comprasController.updateEstado)
router.delete("/:id", comprasController.remove)

export default router
