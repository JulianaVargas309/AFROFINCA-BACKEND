import express from "express"
import cors from "cors"
import authRoutes from "./modules/auth/auth.routes"
import usersRoutes from "./modules/users/users.routes"
import fincasRoutes from "./modules/fincas/fincas.routes"
import { errorHandler } from "./middleware/error.middleware"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API funcionando" })
})

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/fincas", fincasRoutes)

app.use(errorHandler)

export default app
