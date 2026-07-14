import { CreateVentaInput, UpdateVentaInput } from "./ventas.schema";
export declare function findAll(userId: number, page?: number, limit?: number): Promise<({
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
})[] | import("../../lib/pagination").PaginatedResponse<{
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
}>>;
export declare function findById(id: number, userId: number): Promise<{
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
}>;
export declare function createVenta(input: CreateVentaInput, userId: number): Promise<{
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
}>;
export declare function updateVenta(id: number, input: UpdateVentaInput, userId: number): Promise<{
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
}>;
export declare function deleteVenta(id: number, userId: number): Promise<({
    cliente: {
        id: number;
        nombre: string;
    };
    detalles: ({
        producto: {
            id: number;
            nombre: string;
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
    id: number;
    createdAt: Date;
    userId: number;
    updatedAt: Date;
    total: number;
    estado: import("../../generated/prisma/enums").EstadoVenta;
    fecha: Date;
    clienteId: number;
}) | null>;
//# sourceMappingURL=ventas.service.d.ts.map