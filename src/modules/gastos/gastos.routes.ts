import { Router } from "express"
import * as gastosController from "./gastos.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createGastroSchema, updateGastroSchema } from "./gastos.schema"

const router = Router()

router.use(authenticate)

router.get("/", gastosController.findAll)
router.get("/:id", gastosController.findById)
router.post("/", validate(createGastroSchema), gastosController.create)
router.put("/:id", validate(updateGastroSchema), gastosController.update)
router.delete("/:id", gastosController.remove)

export default router
