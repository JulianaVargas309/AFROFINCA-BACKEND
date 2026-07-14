import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model Finca
 *
 */
export type Finca = Prisma.FincaModel;
/**
 * Model Lote
 *
 */
export type Lote = Prisma.LoteModel;
/**
 * Model Cultivo
 *
 */
export type Cultivo = Prisma.CultivoModel;
/**
 * Model Cliente
 *
 */
export type Cliente = Prisma.ClienteModel;
/**
 * Model Proveedor
 *
 */
export type Proveedor = Prisma.ProveedorModel;
/**
 * Model Producto
 *
 */
export type Producto = Prisma.ProductoModel;
/**
 * Model MovimientoInventario
 *
 */
export type MovimientoInventario = Prisma.MovimientoInventarioModel;
/**
 * Model Venta
 *
 */
export type Venta = Prisma.VentaModel;
/**
 * Model DetalleVenta
 *
 */
export type DetalleVenta = Prisma.DetalleVentaModel;
/**
 * Model Gasto
 *
 */
export type Gasto = Prisma.GastoModel;
/**
 * Model Trabajador
 *
 */
export type Trabajador = Prisma.TrabajadorModel;
/**
 * Model Jornal
 *
 */
export type Jornal = Prisma.JornalModel;
/**
 * Model Bitacora
 *
 */
export type Bitacora = Prisma.BitacoraModel;
//# sourceMappingURL=client.d.ts.map