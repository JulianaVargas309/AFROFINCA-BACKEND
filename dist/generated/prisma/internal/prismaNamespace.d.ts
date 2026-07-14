import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.8.0
 * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "refreshToken" | "finca" | "lote" | "cultivo" | "cliente" | "proveedor" | "producto" | "movimientoInventario" | "venta" | "detalleVenta" | "gasto" | "trabajador" | "jornal" | "bitacora";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        RefreshToken: {
            payload: Prisma.$RefreshTokenPayload<ExtArgs>;
            fields: Prisma.RefreshTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                findMany: {
                    args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                create: {
                    args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                createMany: {
                    args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                delete: {
                    args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                update: {
                    args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefreshToken>;
                };
                groupBy: {
                    args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RefreshTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RefreshTokenCountAggregateOutputType> | number;
                };
            };
        };
        Finca: {
            payload: Prisma.$FincaPayload<ExtArgs>;
            fields: Prisma.FincaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FincaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FincaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                findFirst: {
                    args: Prisma.FincaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FincaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                findMany: {
                    args: Prisma.FincaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>[];
                };
                create: {
                    args: Prisma.FincaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                createMany: {
                    args: Prisma.FincaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FincaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>[];
                };
                delete: {
                    args: Prisma.FincaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                update: {
                    args: Prisma.FincaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                deleteMany: {
                    args: Prisma.FincaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FincaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FincaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>[];
                };
                upsert: {
                    args: Prisma.FincaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FincaPayload>;
                };
                aggregate: {
                    args: Prisma.FincaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFinca>;
                };
                groupBy: {
                    args: Prisma.FincaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FincaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FincaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FincaCountAggregateOutputType> | number;
                };
            };
        };
        Lote: {
            payload: Prisma.$LotePayload<ExtArgs>;
            fields: Prisma.LoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                findFirst: {
                    args: Prisma.LoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                findMany: {
                    args: Prisma.LoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>[];
                };
                create: {
                    args: Prisma.LoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                createMany: {
                    args: Prisma.LoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>[];
                };
                delete: {
                    args: Prisma.LoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                update: {
                    args: Prisma.LoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                deleteMany: {
                    args: Prisma.LoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>[];
                };
                upsert: {
                    args: Prisma.LoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LotePayload>;
                };
                aggregate: {
                    args: Prisma.LoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLote>;
                };
                groupBy: {
                    args: Prisma.LoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LoteCountAggregateOutputType> | number;
                };
            };
        };
        Cultivo: {
            payload: Prisma.$CultivoPayload<ExtArgs>;
            fields: Prisma.CultivoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CultivoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CultivoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                findFirst: {
                    args: Prisma.CultivoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CultivoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                findMany: {
                    args: Prisma.CultivoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>[];
                };
                create: {
                    args: Prisma.CultivoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                createMany: {
                    args: Prisma.CultivoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CultivoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>[];
                };
                delete: {
                    args: Prisma.CultivoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                update: {
                    args: Prisma.CultivoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                deleteMany: {
                    args: Prisma.CultivoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CultivoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CultivoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>[];
                };
                upsert: {
                    args: Prisma.CultivoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CultivoPayload>;
                };
                aggregate: {
                    args: Prisma.CultivoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCultivo>;
                };
                groupBy: {
                    args: Prisma.CultivoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CultivoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CultivoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CultivoCountAggregateOutputType> | number;
                };
            };
        };
        Cliente: {
            payload: Prisma.$ClientePayload<ExtArgs>;
            fields: Prisma.ClienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findFirst: {
                    args: Prisma.ClienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findMany: {
                    args: Prisma.ClienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                create: {
                    args: Prisma.ClienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                createMany: {
                    args: Prisma.ClienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                delete: {
                    args: Prisma.ClienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                update: {
                    args: Prisma.ClienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                deleteMany: {
                    args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                upsert: {
                    args: Prisma.ClienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.ClienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        Proveedor: {
            payload: Prisma.$ProveedorPayload<ExtArgs>;
            fields: Prisma.ProveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                findFirst: {
                    args: Prisma.ProveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                findMany: {
                    args: Prisma.ProveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                create: {
                    args: Prisma.ProveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                createMany: {
                    args: Prisma.ProveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProveedorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                delete: {
                    args: Prisma.ProveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                update: {
                    args: Prisma.ProveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.ProveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProveedorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                upsert: {
                    args: Prisma.ProveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                aggregate: {
                    args: Prisma.ProveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProveedor>;
                };
                groupBy: {
                    args: Prisma.ProveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorCountAggregateOutputType> | number;
                };
            };
        };
        Producto: {
            payload: Prisma.$ProductoPayload<ExtArgs>;
            fields: Prisma.ProductoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                findFirst: {
                    args: Prisma.ProductoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                findMany: {
                    args: Prisma.ProductoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                create: {
                    args: Prisma.ProductoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                createMany: {
                    args: Prisma.ProductoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                delete: {
                    args: Prisma.ProductoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                update: {
                    args: Prisma.ProductoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>[];
                };
                upsert: {
                    args: Prisma.ProductoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductoPayload>;
                };
                aggregate: {
                    args: Prisma.ProductoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProducto>;
                };
                groupBy: {
                    args: Prisma.ProductoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductoCountAggregateOutputType> | number;
                };
            };
        };
        MovimientoInventario: {
            payload: Prisma.$MovimientoInventarioPayload<ExtArgs>;
            fields: Prisma.MovimientoInventarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MovimientoInventarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MovimientoInventarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                findFirst: {
                    args: Prisma.MovimientoInventarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MovimientoInventarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                findMany: {
                    args: Prisma.MovimientoInventarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                create: {
                    args: Prisma.MovimientoInventarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                createMany: {
                    args: Prisma.MovimientoInventarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MovimientoInventarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                delete: {
                    args: Prisma.MovimientoInventarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                update: {
                    args: Prisma.MovimientoInventarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                deleteMany: {
                    args: Prisma.MovimientoInventarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MovimientoInventarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MovimientoInventarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>[];
                };
                upsert: {
                    args: Prisma.MovimientoInventarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoInventarioPayload>;
                };
                aggregate: {
                    args: Prisma.MovimientoInventarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovimientoInventario>;
                };
                groupBy: {
                    args: Prisma.MovimientoInventarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoInventarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MovimientoInventarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoInventarioCountAggregateOutputType> | number;
                };
            };
        };
        Venta: {
            payload: Prisma.$VentaPayload<ExtArgs>;
            fields: Prisma.VentaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VentaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VentaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                findFirst: {
                    args: Prisma.VentaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VentaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                findMany: {
                    args: Prisma.VentaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                create: {
                    args: Prisma.VentaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                createMany: {
                    args: Prisma.VentaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VentaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                delete: {
                    args: Prisma.VentaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                update: {
                    args: Prisma.VentaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                deleteMany: {
                    args: Prisma.VentaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VentaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VentaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>[];
                };
                upsert: {
                    args: Prisma.VentaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VentaPayload>;
                };
                aggregate: {
                    args: Prisma.VentaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenta>;
                };
                groupBy: {
                    args: Prisma.VentaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VentaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VentaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VentaCountAggregateOutputType> | number;
                };
            };
        };
        DetalleVenta: {
            payload: Prisma.$DetalleVentaPayload<ExtArgs>;
            fields: Prisma.DetalleVentaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetalleVentaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetalleVentaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                findFirst: {
                    args: Prisma.DetalleVentaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetalleVentaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                findMany: {
                    args: Prisma.DetalleVentaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                create: {
                    args: Prisma.DetalleVentaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                createMany: {
                    args: Prisma.DetalleVentaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetalleVentaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                delete: {
                    args: Prisma.DetalleVentaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                update: {
                    args: Prisma.DetalleVentaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                deleteMany: {
                    args: Prisma.DetalleVentaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetalleVentaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetalleVentaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>[];
                };
                upsert: {
                    args: Prisma.DetalleVentaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleVentaPayload>;
                };
                aggregate: {
                    args: Prisma.DetalleVentaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalleVenta>;
                };
                groupBy: {
                    args: Prisma.DetalleVentaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleVentaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetalleVentaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleVentaCountAggregateOutputType> | number;
                };
            };
        };
        Gasto: {
            payload: Prisma.$GastoPayload<ExtArgs>;
            fields: Prisma.GastoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GastoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GastoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                findFirst: {
                    args: Prisma.GastoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GastoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                findMany: {
                    args: Prisma.GastoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>[];
                };
                create: {
                    args: Prisma.GastoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                createMany: {
                    args: Prisma.GastoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GastoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>[];
                };
                delete: {
                    args: Prisma.GastoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                update: {
                    args: Prisma.GastoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                deleteMany: {
                    args: Prisma.GastoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GastoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GastoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>[];
                };
                upsert: {
                    args: Prisma.GastoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GastoPayload>;
                };
                aggregate: {
                    args: Prisma.GastoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGasto>;
                };
                groupBy: {
                    args: Prisma.GastoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GastoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GastoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GastoCountAggregateOutputType> | number;
                };
            };
        };
        Trabajador: {
            payload: Prisma.$TrabajadorPayload<ExtArgs>;
            fields: Prisma.TrabajadorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrabajadorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrabajadorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                findFirst: {
                    args: Prisma.TrabajadorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrabajadorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                findMany: {
                    args: Prisma.TrabajadorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>[];
                };
                create: {
                    args: Prisma.TrabajadorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                createMany: {
                    args: Prisma.TrabajadorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrabajadorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>[];
                };
                delete: {
                    args: Prisma.TrabajadorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                update: {
                    args: Prisma.TrabajadorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                deleteMany: {
                    args: Prisma.TrabajadorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrabajadorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrabajadorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>[];
                };
                upsert: {
                    args: Prisma.TrabajadorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrabajadorPayload>;
                };
                aggregate: {
                    args: Prisma.TrabajadorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrabajador>;
                };
                groupBy: {
                    args: Prisma.TrabajadorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrabajadorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrabajadorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrabajadorCountAggregateOutputType> | number;
                };
            };
        };
        Jornal: {
            payload: Prisma.$JornalPayload<ExtArgs>;
            fields: Prisma.JornalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.JornalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.JornalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                findFirst: {
                    args: Prisma.JornalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.JornalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                findMany: {
                    args: Prisma.JornalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>[];
                };
                create: {
                    args: Prisma.JornalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                createMany: {
                    args: Prisma.JornalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.JornalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>[];
                };
                delete: {
                    args: Prisma.JornalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                update: {
                    args: Prisma.JornalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                deleteMany: {
                    args: Prisma.JornalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.JornalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.JornalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>[];
                };
                upsert: {
                    args: Prisma.JornalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$JornalPayload>;
                };
                aggregate: {
                    args: Prisma.JornalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateJornal>;
                };
                groupBy: {
                    args: Prisma.JornalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JornalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.JornalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.JornalCountAggregateOutputType> | number;
                };
            };
        };
        Bitacora: {
            payload: Prisma.$BitacoraPayload<ExtArgs>;
            fields: Prisma.BitacoraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BitacoraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BitacoraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                findFirst: {
                    args: Prisma.BitacoraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BitacoraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                findMany: {
                    args: Prisma.BitacoraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                create: {
                    args: Prisma.BitacoraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                createMany: {
                    args: Prisma.BitacoraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BitacoraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                delete: {
                    args: Prisma.BitacoraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                update: {
                    args: Prisma.BitacoraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                deleteMany: {
                    args: Prisma.BitacoraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BitacoraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BitacoraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>[];
                };
                upsert: {
                    args: Prisma.BitacoraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BitacoraPayload>;
                };
                aggregate: {
                    args: Prisma.BitacoraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBitacora>;
                };
                groupBy: {
                    args: Prisma.BitacoraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BitacoraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BitacoraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BitacoraCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Rol'
 */
export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>;
/**
 * Reference to a field of type 'Rol[]'
 */
export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Reference to a field of type 'TipoCultivo'
 */
export type EnumTipoCultivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCultivo'>;
/**
 * Reference to a field of type 'TipoCultivo[]'
 */
export type ListEnumTipoCultivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoCultivo[]'>;
/**
 * Reference to a field of type 'EstadoCultivo'
 */
export type EnumEstadoCultivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCultivo'>;
/**
 * Reference to a field of type 'EstadoCultivo[]'
 */
export type ListEnumEstadoCultivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCultivo[]'>;
/**
 * Reference to a field of type 'EstadoVenta'
 */
export type EnumEstadoVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVenta'>;
/**
 * Reference to a field of type 'EstadoVenta[]'
 */
export type ListEnumEstadoVentaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoVenta[]'>;
/**
 * Reference to a field of type 'CategoriaGasto'
 */
export type EnumCategoriaGastoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaGasto'>;
/**
 * Reference to a field of type 'CategoriaGasto[]'
 */
export type ListEnumCategoriaGastoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaGasto[]'>;
/**
 * Reference to a field of type 'ActividadBitacora'
 */
export type EnumActividadBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActividadBitacora'>;
/**
 * Reference to a field of type 'ActividadBitacora[]'
 */
export type ListEnumActividadBitacoraFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActividadBitacora[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    refreshToken?: Prisma.RefreshTokenOmit;
    finca?: Prisma.FincaOmit;
    lote?: Prisma.LoteOmit;
    cultivo?: Prisma.CultivoOmit;
    cliente?: Prisma.ClienteOmit;
    proveedor?: Prisma.ProveedorOmit;
    producto?: Prisma.ProductoOmit;
    movimientoInventario?: Prisma.MovimientoInventarioOmit;
    venta?: Prisma.VentaOmit;
    detalleVenta?: Prisma.DetalleVentaOmit;
    gasto?: Prisma.GastoOmit;
    trabajador?: Prisma.TrabajadorOmit;
    jornal?: Prisma.JornalOmit;
    bitacora?: Prisma.BitacoraOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map