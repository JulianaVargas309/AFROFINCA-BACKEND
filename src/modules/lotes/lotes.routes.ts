import { Router } from "express"
import * as lotesController from "./lotes.controller"
import { authenticate } from "../../middleware/auth.middleware"
import { validate } from "../../middleware/validate.middleware"
import { createLoteSchema, updateLoteSchema } from "./lotes.schema"

const router = Router()

router.use(authenticate)

router.get("/", lotesController.findAll)
router.get("/:id", lotesController.findById)
router.post("/", validate(createLoteSchema), lotesController.create)
router.put("/:id", validate(updateLoteSchema), lotesController.update)
router.delete("/:id", lotesController.remove)

export default router
