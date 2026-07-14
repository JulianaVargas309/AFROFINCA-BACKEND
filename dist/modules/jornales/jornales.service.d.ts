import { CreateJornalInput, UpdateJornalInput } from "./jornales.schema";
export declare function findAll(loteId: number | undefined, userId: number): Promise<({
    lote: {
        id: number;
        nombre: string;
    };
    trabajador: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
})[]>;
export declare function findById(id: number, userId: number): Promise<{
    lote: {
        id: number;
        nombre: string;
    };
    trabajador: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
}>;
export declare function createJornal(input: CreateJornalInput, userId: number): Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
}>;
export declare function updateJornal(id: number, input: UpdateJornalInput, userId: number): Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
}>;
export declare function deleteJornal(id: number, userId: number): Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
}>;
export declare function findByTrabajador(trabajadorId: number, userId: number): Promise<({
    lote: {
        id: number;
        nombre: string;
    };
    trabajador: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
})[]>;
export declare function updateEstado(id: number, estado: string, userId: number): Promise<{
    id: number;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    trabajadorId: number;
    montoPagado: number | null;
}>;
//# sourceMappingURL=jornales.service.d.ts.map