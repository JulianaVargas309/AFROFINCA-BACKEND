"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
function authorize(...roles) {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ success: false, error: "No autenticado" });
            return;
        }
        if (!roles.includes(req.user.rol)) {
            res.status(403).json({
                success: false,
                error: "No tienes permisos para realizar esta acción",
            });
            return;
        }
        next();
    };
}
//# sourceMappingURL=authorize.middleware.js.map