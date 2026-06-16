import { CreateJornalInput, UpdateJornalInput } from "./jornales.schema";
export declare function findAll(trabajadorId: number, userId: number): Promise<({
    finca: {
        nombre: string;
        id: number;
    };
} & {
    createdAt: Date;
    id: number;
    fincaId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    trabajadorId: number;
})[]>;
export declare function findById(id: number, userId: number): Promise<{
    finca: {
        nombre: string;
        id: number;
    };
    trabajador: {
        nombre: string;
        id: number;
    };
} & {
    createdAt: Date;
    id: number;
    fincaId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    trabajadorId: number;
}>;
export declare function createJornal(input: CreateJornalInput, userId: number): Promise<{
    createdAt: Date;
    id: number;
    fincaId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    trabajadorId: number;
}>;
export declare function updateJornal(id: number, input: UpdateJornalInput, userId: number): Promise<{
    createdAt: Date;
    id: number;
    fincaId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    trabajadorId: number;
}>;
export declare function deleteJornal(id: number, userId: number): Promise<{
    createdAt: Date;
    id: number;
    fincaId: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    trabajadorId: number;
}>;
//# sourceMappingURL=jornales.service.d.ts.map