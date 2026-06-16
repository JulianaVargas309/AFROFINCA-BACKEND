import { Router } from "express"
import * as authController from "./auth.controller"
import { validate } from "../../middleware/validate.middleware"
import { registerSchema, loginSchema, refreshSchema } from "./auth.schema"

const router = Router()

router.post("/register", validate(registerSchema), authController.register)
router.post("/login", validate(loginSchema), authController.login)
router.post("/refresh", validate(refreshSchema), authController.refresh)

export default router
