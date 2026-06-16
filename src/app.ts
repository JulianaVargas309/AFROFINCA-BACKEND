import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import authRoutes from "./modules/auth/auth.routes"
import usersRoutes from "./modules/users/users.routes"
import fincasRoutes from "./modules/fincas/fincas.routes"
import lotesRoutes from "./modules/lotes/lotes.routes"
import cultivosRoutes from "./modules/cultivos/cultivos.routes"
import clientesRoutes from "./modules/clientes/clientes.routes"
import proveedoresRoutes from "./modules/proveedores/proveedores.routes"
import productosRoutes from "./modules/productos/productos.routes"
import movimientosRoutes from "./modules/movimientos/movimientos.routes"
import ventasRoutes from "./modules/ventas/ventas.routes"
import gastosRoutes from "./modules/gastos/gastos.routes"
import trabajadoresRoutes from "./modules/trabajadores/trabajadores.routes"
import jornalesRoutes from "./modules/jornales/jornales.routes"
import bitacoraRoutes from "./modules/bitacora/bitacora.routes"
import { env } from "./config/env"
import { errorHandler } from "./middleware/error.middleware"

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)
app.use(morgan("dev"))
app.use(express.json())

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "API funcionando" })
})

app.use("/api/auth", authRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/fincas", fincasRoutes)
app.use("/api/lotes", lotesRoutes)
app.use("/api/cultivos", cultivosRoutes)
app.use("/api/clientes", clientesRoutes)
app.use("/api/proveedores", proveedoresRoutes)
app.use("/api/productos", productosRoutes)
app.use("/api/movimientos", movimientosRoutes)
app.use("/api/ventas", ventasRoutes)
app.use("/api/gastos", gastosRoutes)
app.use("/api/trabajadores", trabajadoresRoutes)
app.use("/api/jornales", jornalesRoutes)
app.use("/api/bitacora", bitacoraRoutes)

app.use(errorHandler)

export default app
