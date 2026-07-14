import { Router } from "express"
import * as produccionController from "./produccion.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createProduccionSchema, updateProduccionSchema } from "./produccion.schema"

const router = Router()

router.use(authenticate)

router.get("/", produccionController.findAll)
router.get("/:id", produccionController.findById)
router.post("/", validate(createProduccionSchema), produccionController.create)
router.put("/:id", validate(updateProduccionSchema), produccionController.update)
router.delete("/:id", produccionController.remove)

export default router
