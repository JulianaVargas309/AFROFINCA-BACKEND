import { Router } from "express"
import * as fincasController from "./fincas.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createFincaSchema, updateFincaSchema } from "./fincas.schema"

const router = Router()

router.use(authenticate)

router.get("/", fincasController.findAll)
router.get("/:id", fincasController.findById)
router.post("/", validate(createFincaSchema), fincasController.create)
router.put("/:id", validate(updateFincaSchema), fincasController.update)
router.delete("/:id", fincasController.remove)

export default router
