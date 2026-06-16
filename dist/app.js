"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const auth_routes_1 = __importDefault(require("./modules/auth/auth.routes"));
const users_routes_1 = __importDefault(require("./modules/users/users.routes"));
const fincas_routes_1 = __importDefault(require("./modules/fincas/fincas.routes"));
const lotes_routes_1 = __importDefault(require("./modules/lotes/lotes.routes"));
const cultivos_routes_1 = __importDefault(require("./modules/cultivos/cultivos.routes"));
const clientes_routes_1 = __importDefault(require("./modules/clientes/clientes.routes"));
const proveedores_routes_1 = __importDefault(require("./modules/proveedores/proveedores.routes"));
const productos_routes_1 = __importDefault(require("./modules/productos/productos.routes"));
const movimientos_routes_1 = __importDefault(require("./modules/movimientos/movimientos.routes"));
const ventas_routes_1 = __importDefault(require("./modules/ventas/ventas.routes"));
const gastos_routes_1 = __importDefault(require("./modules/gastos/gastos.routes"));
const trabajadores_routes_1 = __importDefault(require("./modules/trabajadores/trabajadores.routes"));
const jornales_routes_1 = __importDefault(require("./modules/jornales/jornales.routes"));
const env_1 = require("./config/env");
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    origin: env_1.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "API funcionando" });
});
app.use("/api/auth", auth_routes_1.default);
app.use("/api/users", users_routes_1.default);
app.use("/api/fincas", fincas_routes_1.default);
app.use("/api/lotes", lotes_routes_1.default);
app.use("/api/cultivos", cultivos_routes_1.default);
app.use("/api/clientes", clientes_routes_1.default);
app.use("/api/proveedores", proveedores_routes_1.default);
app.use("/api/productos", productos_routes_1.default);
app.use("/api/movimientos", movimientos_routes_1.default);
app.use("/api/ventas", ventas_routes_1.default);
app.use("/api/gastos", gastos_routes_1.default);
app.use("/api/trabajadores", trabajadores_routes_1.default);
app.use("/api/jornales", jornales_routes_1.default);
app.use(error_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map