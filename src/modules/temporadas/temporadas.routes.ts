import { Router } from "express"
import * as temporadasController from "./temporadas.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createTemporadaSchema, updateTemporadaSchema } from "./temporadas.schema"

const router = Router()

router.use(authenticate)

router.get("/", temporadasController.findAll)
router.get("/:id", temporadasController.findById)
router.post("/", validate(createTemporadaSchema), temporadasController.create)
router.put("/:id", validate(updateTemporadaSchema), temporadasController.update)
router.delete("/:id", temporadasController.remove)

export default router
