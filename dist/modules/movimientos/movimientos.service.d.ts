import { CreateMovimientoInput } from "./movimientos.schema";
export declare function findAll(productoId: number): Promise<({
    user: {
        id: number;
        nombre: string | null;
    };
} & {
    id: number;
    createdAt: Date;
    userId: number;
    tipo: string;
    fecha: Date;
    cantidad: number;
    motivo: string | null;
    productoId: number;
})[]>;
export declare function findById(id: number): Promise<{
    user: {
        id: number;
        nombre: string | null;
    };
    producto: {
        id: number;
        nombre: string;
    };
} & {
    id: number;
    createdAt: Date;
    userId: number;
    tipo: string;
    fecha: Date;
    cantidad: number;
    motivo: string | null;
    productoId: number;
}>;
export declare function createMovimiento(input: CreateMovimientoInput, userId: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    tipo: string;
    fecha: Date;
    cantidad: number;
    motivo: string | null;
    productoId: number;
}>;
export declare function deleteMovimiento(id: number): Promise<{
    id: number;
    createdAt: Date;
    userId: number;
    tipo: string;
    fecha: Date;
    cantidad: number;
    motivo: string | null;
    productoId: number;
}>;
//# sourceMappingURL=movimientos.service.d.ts.map