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
import rolesRoutes from "./modules/roles/roles.routes"
import permissionsRoutes from "./modules/permissions/permissions.routes"
import auditoriaRoutes from "./modules/auditoria/auditoria.routes"
import temporadasRoutes from "./modules/temporadas/temporadas.routes"
import produccionRoutes from "./modules/produccion/produccion.routes"
import rendimientoRoutes from "./modules/rendimiento/rendimiento.routes"
import categoriasRoutes from "./modules/categorias/categorias.routes"
import comprasRoutes from "./modules/compras/compras.routes"
import ajustesRoutes from "./modules/ajustes/ajustes.routes"
import alertasRoutes from "./modules/alertas/alertas.routes"
import historialLaboralRoutes from "./modules/historial-laboral/historial-laboral.routes"
import asistenciasRoutes from "./modules/asistencias/asistencias.routes"
import actividadesAsignadasRoutes from "./modules/actividades-asignadas/actividades-asignadas.routes"
import calendarioRoutes from "./modules/calendario/calendario.routes"
import recordatoriosRoutes from "./modules/recordatorios/recordatorios.routes"
import actividadesRoutes from "./modules/actividades/actividades.routes"
import cajaRoutes from "./modules/caja/caja.routes"
import flujoRoutes from "./modules/flujo/flujo.routes"
import presupuestosRoutes from "./modules/presupuestos/presupuestos.routes"
import notificacionesRoutes from "./modules/notificaciones/notificaciones.routes"
import configuracionRoutes from "./modules/configuracion/configuracion.routes"
import dashboardRoutes from "./modules/dashboard/dashboard.routes"
import { env } from "./config/env"
import { errorHandler } from "./middleware/error.middleware"

const app = express()

const corsOptions = {
  origin: env.CORS_ORIGIN === "*" ? true : env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json({ limit: "50mb" }))

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
app.use("/api/roles", rolesRoutes)
app.use("/api/permisos", permissionsRoutes)
app.use("/api/auditoria", auditoriaRoutes)
app.use("/api/temporadas", temporadasRoutes)
app.use("/api/produccion", produccionRoutes)
app.use("/api/rendimiento", rendimientoRoutes)
app.use("/api/categorias", categoriasRoutes)
app.use("/api/compras", comprasRoutes)
app.use("/api/ajustes", ajustesRoutes)
app.use("/api/alertas", alertasRoutes)
app.use("/api/historial-laboral", historialLaboralRoutes)
app.use("/api/asistencias", asistenciasRoutes)
app.use("/api/actividades-asignadas", actividadesAsignadasRoutes)
app.use("/api/calendario", calendarioRoutes)
app.use("/api/recordatorios", recordatoriosRoutes)
app.use("/api/actividades", actividadesRoutes)
app.use("/api/caja", cajaRoutes)
app.use("/api/flujo", flujoRoutes)
app.use("/api/presupuestos", presupuestosRoutes)
app.use("/api/notificaciones", notificacionesRoutes)
app.use("/api/configuracion", configuracionRoutes)
app.use("/api/dashboard", dashboardRoutes)

app.use(errorHandler)

export default app
