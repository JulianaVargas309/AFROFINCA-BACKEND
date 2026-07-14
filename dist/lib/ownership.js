"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFincaOwnership = verifyFincaOwnership;
exports.verifyLoteOwnership = verifyLoteOwnership;
const prisma_1 = require("./prisma");
const types_1 = require("../types");
async function verifyFincaOwnership(fincaId, userId) {
    const finca = await prisma_1.prisma.finca.findFirst({
        where: { id: fincaId, userId },
    });
    if (!finca)
        throw new types_1.AppError("Finca no encontrada o no pertenece al usuario", 404);
    return finca;
}
async function verifyLoteOwnership(loteId, userId) {
    const lote = await prisma_1.prisma.lote.findFirst({
        where: { id: loteId, finca: { userId } },
    });
    if (!lote)
        throw new types_1.AppError("Lote no encontrado o no pertenece al usuario", 404);
    return lote;
}
//# sourceMappingURL=ownership.js.map