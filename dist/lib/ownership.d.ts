export declare function verifyFincaOwnership(fincaId: number, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    userId: number;
    activo: boolean;
    updatedAt: Date;
    ubicacion: string | null;
    hectareas: number | null;
    descripcion: string | null;
}>;
export declare function verifyLoteOwnership(loteId: number, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    descripcion: string | null;
    area: number | null;
    fincaId: number;
}>;
//# sourceMappingURL=ownership.d.ts.map