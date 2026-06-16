import { Router } from "express"
import * as proveedoresController from "./proveedores.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createProveedorSchema, updateProveedorSchema } from "./proveedores.schema"

const router = Router()

router.use(authenticate)

router.get("/", proveedoresController.findAll)
router.get("/:id", proveedoresController.findById)
router.post("/", validate(createProveedorSchema), proveedoresController.create)
router.put("/:id", validate(updateProveedorSchema), proveedoresController.update)
router.delete("/:id", proveedoresController.remove)

export default router
