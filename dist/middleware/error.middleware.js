"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const types_1 = require("../types");
const client_1 = require("../generated/prisma/client");
const PRISMA_ERROR_MAP = {
    P2002: { status: 409, message: "El registro ya existe (valor duplicado)" },
    P2025: { status: 404, message: "Registro no encontrado" },
    P2003: { status: 400, message: "Referencia inválida a otro registro" },
    P2014: { status: 400, message: "Violación de relación" },
};
function errorHandler(err, _req, res, _next) {
    if (err instanceof types_1.AppError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
        return;
    }
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const mapping = PRISMA_ERROR_MAP[err.code];
        if (mapping) {
            res.status(mapping.status).json({
                success: false,
                message: mapping.message,
                ...(err.code === "P2002" && {
                    details: err.meta?.target,
                }),
            });
            return;
        }
    }
    console.error("[ERROR]", err);
    res.status(500).json({
        success: false,
        message: "Error interno del servidor",
    });
}
//# sourceMappingURL=error.middleware.js.map