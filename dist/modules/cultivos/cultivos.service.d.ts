import { CreateCultivoInput, UpdateCultivoInput } from "./cultivos.schema";
export declare function findAll(loteId: number | undefined, userId: number): Promise<({
    lote: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    tipo: import("../../generated/prisma/enums").TipoCultivo;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number;
    fechaCosechaReal: Date | null;
    estado: import("../../generated/prisma/enums").EstadoCultivo;
})[]>;
export declare function findById(id: number, userId: number): Promise<{
    gastos: {
        id: number;
        descripcion: string;
        monto: number;
    }[];
    lote: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    tipo: import("../../generated/prisma/enums").TipoCultivo;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number;
    fechaCosechaReal: Date | null;
    estado: import("../../generated/prisma/enums").EstadoCultivo;
}>;
export declare function createCultivo(input: CreateCultivoInput, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    tipo: import("../../generated/prisma/enums").TipoCultivo;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number;
    fechaCosechaReal: Date | null;
    estado: import("../../generated/prisma/enums").EstadoCultivo;
}>;
export declare function updateCultivo(id: number, input: UpdateCultivoInput, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    tipo: import("../../generated/prisma/enums").TipoCultivo;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number;
    fechaCosechaReal: Date | null;
    estado: import("../../generated/prisma/enums").EstadoCultivo;
}>;
export declare function deactivateCultivo(id: number, userId: number): Promise<{
    id: number;
    nombre: string;
    createdAt: Date;
    activo: boolean;
    updatedAt: Date;
    tipo: import("../../generated/prisma/enums").TipoCultivo;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number;
    fechaCosechaReal: Date | null;
    estado: import("../../generated/prisma/enums").EstadoCultivo;
}>;
//# sourceMappingURL=cultivos.service.d.ts.map