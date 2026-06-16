"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const types_1 = require("../types");
function errorHandler(err, _req, res, _next) {
    if (err instanceof types_1.AppError) {
        res.status(err.statusCode).json({
            success: false,
            error: err.message,
        });
        return;
    }
    console.error("[ERROR]", err);
    res.status(500).json({
        success: false,
        error: "Error interno del servidor",
    });
}
//# sourceMappingURL=error.middleware.js.map