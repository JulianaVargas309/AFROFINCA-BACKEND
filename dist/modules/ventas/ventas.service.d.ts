import { CreateVentaInput, UpdateVentaInput } from "./ventas.schema";
export declare function findAll(userId: number, page?: number, limit?: number): Promise<({
    cliente: {
        nombre: string;
        id: number;
    };
    detalles: ({
        producto: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        precioUnitario: number;
        cantidad: number;
        productoId: number;
        subtotal: number;
        ventaId: number;
    })[];
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: string;
    fecha: Date;
    clienteId: number;
})[] | import("../../lib/pagination").PaginatedResponse<{
    cliente: {
        nombre: string;
        id: number;
    };
    detalles: ({
        producto: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        precioUnitario: number;
        cantidad: number;
        productoId: number;
        subtotal: number;
        ventaId: number;
    })[];
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: string;
    fecha: Date;
    clienteId: number;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    cliente: {
        nombre: string;
        id: number;
    };
    detalles: ({
        producto: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        precioUnitario: number;
        cantidad: number;
        productoId: number;
        subtotal: number;
        ventaId: number;
    })[];
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: string;
    fecha: Date;
    clienteId: number;
}>;
export declare function createVenta(input: CreateVentaInput, userId: number): Promise<{
    cliente: {
        nombre: string;
        id: number;
    };
    detalles: ({
        producto: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        precioUnitario: number;
        cantidad: number;
        productoId: number;
        subtotal: number;
        ventaId: number;
    })[];
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: string;
    fecha: Date;
    clienteId: number;
}>;
export declare function updateVenta(id: number, input: UpdateVentaInput, userId: number): Promise<{
    cliente: {
        nombre: string;
        id: number;
    };
    detalles: ({
        producto: {
            nombre: string;
            id: number;
        };
    } & {
        id: number;
        precioUnitario: number;
        cantidad: number;
        productoId: number;
        subtotal: number;
        ventaId: number;
    })[];
} & {
    createdAt: Date;
    id: number;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: string;
    fecha: Date;
    clienteId: number;
}>;
//# sourceMappingURL=ventas.service.d.ts.map