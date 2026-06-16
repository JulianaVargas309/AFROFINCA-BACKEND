import { CreateMovimientoInput } from "./movimientos.schema";
export declare function findAll(productoId: number): Promise<({
    user: {
        nombre: string;
        id: number;
    };
} & {
    createdAt: Date;
    id: number;
    userId: number;
    tipo: string;
    cantidad: number;
    motivo: string | null;
    productoId: number;
    fecha: Date;
})[]>;
export declare function createMovimiento(input: CreateMovimientoInput, userId: number): Promise<{
    createdAt: Date;
    id: number;
    userId: number;
    tipo: string;
    cantidad: number;
    motivo: string | null;
    productoId: number;
    fecha: Date;
}>;
//# sourceMappingURL=movimientos.service.d.ts.map