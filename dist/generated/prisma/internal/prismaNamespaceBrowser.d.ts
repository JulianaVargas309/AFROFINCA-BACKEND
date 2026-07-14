import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly Finca: "Finca";
    readonly Lote: "Lote";
    readonly Cultivo: "Cultivo";
    readonly Cliente: "Cliente";
    readonly Proveedor: "Proveedor";
    readonly Producto: "Producto";
    readonly MovimientoInventario: "MovimientoInventario";
    readonly Venta: "Venta";
    readonly DetalleVenta: "DetalleVenta";
    readonly Gasto: "Gasto";
    readonly Trabajador: "Trabajador";
    readonly Jornal: "Jornal";
    readonly Bitacora: "Bitacora";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly documento: "documento";
    readonly password: "password";
    readonly rol: "rol";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const FincaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly ubicacion: "ubicacion";
    readonly hectareas: "hectareas";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
};
export type FincaScalarFieldEnum = (typeof FincaScalarFieldEnum)[keyof typeof FincaScalarFieldEnum];
export declare const LoteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly area: "area";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly fincaId: "fincaId";
};
export type LoteScalarFieldEnum = (typeof LoteScalarFieldEnum)[keyof typeof LoteScalarFieldEnum];
export declare const CultivoScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly variedad: "variedad";
    readonly fechaSiembra: "fechaSiembra";
    readonly fechaCosechaEstimada: "fechaCosechaEstimada";
    readonly fechaCosechaReal: "fechaCosechaReal";
    readonly estado: "estado";
    readonly cantidadSembrada: "cantidadSembrada";
    readonly numeroSoca: "numeroSoca";
    readonly edadCafetal: "edadCafetal";
    readonly plantasPorHectarea: "plantasPorHectarea";
    readonly rendimientoEstimado: "rendimientoEstimado";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly loteId: "loteId";
};
export type CultivoScalarFieldEnum = (typeof CultivoScalarFieldEnum)[keyof typeof CultivoScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccion: "direccion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const ProveedorScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccion: "direccion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const ProductoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly categoria: "categoria";
    readonly unidadMedida: "unidadMedida";
    readonly stockActual: "stockActual";
    readonly stockMinimo: "stockMinimo";
    readonly precioUnitario: "precioUnitario";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const MovimientoInventarioScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly cantidad: "cantidad";
    readonly motivo: "motivo";
    readonly fecha: "fecha";
    readonly createdAt: "createdAt";
    readonly productoId: "productoId";
    readonly userId: "userId";
};
export type MovimientoInventarioScalarFieldEnum = (typeof MovimientoInventarioScalarFieldEnum)[keyof typeof MovimientoInventarioScalarFieldEnum];
export declare const VentaScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly total: "total";
    readonly estado: "estado";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly clienteId: "clienteId";
    readonly userId: "userId";
};
export type VentaScalarFieldEnum = (typeof VentaScalarFieldEnum)[keyof typeof VentaScalarFieldEnum];
export declare const DetalleVentaScalarFieldEnum: {
    readonly id: "id";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly subtotal: "subtotal";
    readonly ventaId: "ventaId";
    readonly productoId: "productoId";
};
export type DetalleVentaScalarFieldEnum = (typeof DetalleVentaScalarFieldEnum)[keyof typeof DetalleVentaScalarFieldEnum];
export declare const GastoScalarFieldEnum: {
    readonly id: "id";
    readonly descripcion: "descripcion";
    readonly monto: "monto";
    readonly categoria: "categoria";
    readonly fecha: "fecha";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly proveedorId: "proveedorId";
    readonly cultivoId: "cultivoId";
    readonly fincaId: "fincaId";
    readonly loteId: "loteId";
    readonly userId: "userId";
};
export type GastoScalarFieldEnum = (typeof GastoScalarFieldEnum)[keyof typeof GastoScalarFieldEnum];
export declare const TrabajadorScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly telefono: "telefono";
    readonly direccion: "direccion";
    readonly tipo: "tipo";
    readonly salarioBase: "salarioBase";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TrabajadorScalarFieldEnum = (typeof TrabajadorScalarFieldEnum)[keyof typeof TrabajadorScalarFieldEnum];
export declare const JornalScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly horas: "horas";
    readonly tarea: "tarea";
    readonly montoPagado: "montoPagado";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly trabajadorId: "trabajadorId";
    readonly loteId: "loteId";
};
export type JornalScalarFieldEnum = (typeof JornalScalarFieldEnum)[keyof typeof JornalScalarFieldEnum];
export declare const BitacoraScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly actividad: "actividad";
    readonly descripcion: "descripcion";
    readonly cantidad: "cantidad";
    readonly unidadMedida: "unidadMedida";
    readonly costo: "costo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly loteId: "loteId";
    readonly cultivoId: "cultivoId";
    readonly productoId: "productoId";
    readonly userId: "userId";
};
export type BitacoraScalarFieldEnum = (typeof BitacoraScalarFieldEnum)[keyof typeof BitacoraScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map