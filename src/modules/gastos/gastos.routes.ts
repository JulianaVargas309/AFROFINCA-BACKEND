import { Router } from "express"
import * as gastosController from "./gastos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createGastoSchema, updateGastoSchema } from "./gastos.schema"

const router = Router()

router.use(authenticate)

router.get("/", gastosController.findAll)
router.get("/:id", gastosController.findById)
router.post("/", validate(createGastoSchema), gastosController.create)
router.put("/:id", validate(updateGastoSchema), gastosController.update)
router.delete("/:id", gastosController.remove)

export default router
