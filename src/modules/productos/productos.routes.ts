import { Router } from "express"
import * as productosController from "./productos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createProductoSchema, updateProductoSchema } from "./productos.schema"

const router = Router()

router.use(authenticate)

router.get("/", productosController.findAll)
router.get("/:id", productosController.findById)
router.post("/", validate(createProductoSchema), productosController.create)
router.put("/:id", validate(updateProductoSchema), productosController.update)
router.delete("/:id", productosController.remove)

export default router
