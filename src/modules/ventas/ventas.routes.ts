import { Router } from "express"
import * as ventasController from "./ventas.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createVentaSchema, updateVentaSchema } from "./ventas.schema"

const router = Router()

router.use(authenticate)

router.get("/", ventasController.findAll)
router.get("/:id", ventasController.findById)
router.post("/", validate(createVentaSchema), ventasController.create)
router.patch("/:id", validate(updateVentaSchema), ventasController.update)
router.delete("/:id", ventasController.remove)

export default router
