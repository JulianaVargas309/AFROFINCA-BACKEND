"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationParams = getPaginationParams;
exports.paginatedResponse = paginatedResponse;
function getPaginationParams(query) {
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(100, Math.max(1, query.limit ?? 10));
    return {
        skip: (page - 1) * limit,
        take: limit,
        page,
        limit,
    };
}
function paginatedResponse(data, total, params) {
    const { page, limit } = getPaginationParams(params);
    return {
        data,
        meta: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit),
        },
    };
}
//# sourceMappingURL=pagination.js.map