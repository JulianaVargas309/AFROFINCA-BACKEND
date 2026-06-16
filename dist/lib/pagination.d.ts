export interface PaginationParams {
    page?: number;
    limit?: number;
}
export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
}
export declare function getPaginationParams(query: PaginationParams): {
    skip: number;
    take: number;
    page: number;
    limit: number;
};
export declare function paginatedResponse<T>(data: T[], total: number, params: PaginationParams): PaginatedResponse<T>;
//# sourceMappingURL=pagination.d.ts.map