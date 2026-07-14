"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
const roles_1 = require("../types/roles");
function authorize(rolMinimo) {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ success: false, message: "No autenticado" });
            return;
        }
        if (!(0, roles_1.tienePermiso)(req.user.rol, rolMinimo)) {
            res.status(403).json({
                success: false,
                message: "No tienes permisos para realizar esta acción",
            });
            return;
        }
        next();
    };
}
//# sourceMappingURL=authorize.middleware.js.map