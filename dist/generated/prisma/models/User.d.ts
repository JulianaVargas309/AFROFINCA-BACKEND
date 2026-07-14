import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    documento: string | null;
    password: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    documento: string | null;
    password: string | null;
    rol: $Enums.Rol | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    nombre: number;
    documento: number;
    password: number;
    rol: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    nombre?: true;
    documento?: true;
    password?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    documento?: true;
    password?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    nombre?: true;
    documento?: true;
    password?: true;
    rol?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    nombre: string | null;
    documento: string;
    password: string;
    rol: $Enums.Rol;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    nombre?: Prisma.StringNullableFilter<"User"> | string | null;
    documento?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    rol?: Prisma.EnumRolFilter<"User"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    fincas?: Prisma.FincaListRelationFilter;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
    gastos?: Prisma.GastoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincas?: Prisma.FincaOrderByRelationAggregateInput;
    refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput;
    movimientos?: Prisma.MovimientoInventarioOrderByRelationAggregateInput;
    ventas?: Prisma.VentaOrderByRelationAggregateInput;
    gastos?: Prisma.GastoOrderByRelationAggregateInput;
    bitacoras?: Prisma.BitacoraOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    documento?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    nombre?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringFilter<"User"> | string;
    rol?: Prisma.EnumRolFilter<"User"> | $Enums.Rol;
    activo?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    fincas?: Prisma.FincaListRelationFilter;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    movimientos?: Prisma.MovimientoInventarioListRelationFilter;
    ventas?: Prisma.VentaListRelationFilter;
    gastos?: Prisma.GastoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
}, "id" | "documento">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    documento?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    rol?: Prisma.EnumRolWithAggregatesFilter<"User"> | $Enums.Rol;
    activo?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    documento?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserCreateNestedOneWithoutFincasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFincasInput, Prisma.UserUncheckedCreateWithoutFincasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFincasInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFincasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFincasInput, Prisma.UserUncheckedCreateWithoutFincasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFincasInput;
    upsert?: Prisma.UserUpsertWithoutFincasInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFincasInput, Prisma.UserUpdateWithoutFincasInput>, Prisma.UserUncheckedUpdateWithoutFincasInput>;
};
export type UserCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMovimientosInput, Prisma.UserUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMovimientosInput, Prisma.UserUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.UserUpsertWithoutMovimientosInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMovimientosInput, Prisma.UserUpdateWithoutMovimientosInput>, Prisma.UserUncheckedUpdateWithoutMovimientosInput>;
};
export type UserCreateNestedOneWithoutVentasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVentasInput, Prisma.UserUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVentasInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutVentasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutVentasInput, Prisma.UserUncheckedCreateWithoutVentasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutVentasInput;
    upsert?: Prisma.UserUpsertWithoutVentasInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutVentasInput, Prisma.UserUpdateWithoutVentasInput>, Prisma.UserUncheckedUpdateWithoutVentasInput>;
};
export type UserCreateNestedOneWithoutGastosInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGastosInput, Prisma.UserUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGastosInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutGastosNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutGastosInput, Prisma.UserUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutGastosInput;
    upsert?: Prisma.UserUpsertWithoutGastosInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutGastosInput, Prisma.UserUpdateWithoutGastosInput>, Prisma.UserUncheckedUpdateWithoutGastosInput>;
};
export type UserCreateNestedOneWithoutBitacorasInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBitacorasInput, Prisma.UserUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBitacorasInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutBitacorasInput, Prisma.UserUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutBitacorasInput;
    upsert?: Prisma.UserUpsertWithoutBitacorasInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutBitacorasInput, Prisma.UserUpdateWithoutBitacorasInput>, Prisma.UserUncheckedUpdateWithoutBitacorasInput>;
};
export type UserCreateWithoutRefreshTokensInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
};
export type UserUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserUpdateWithoutRefreshTokensInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFincasInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFincasInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFincasInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFincasInput, Prisma.UserUncheckedCreateWithoutFincasInput>;
};
export type UserUpsertWithoutFincasInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFincasInput, Prisma.UserUncheckedUpdateWithoutFincasInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFincasInput, Prisma.UserUncheckedCreateWithoutFincasInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFincasInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFincasInput, Prisma.UserUncheckedUpdateWithoutFincasInput>;
};
export type UserUpdateWithoutFincasInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFincasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMovimientosInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMovimientosInput, Prisma.UserUncheckedCreateWithoutMovimientosInput>;
};
export type UserUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMovimientosInput, Prisma.UserUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMovimientosInput, Prisma.UserUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMovimientosInput, Prisma.UserUncheckedUpdateWithoutMovimientosInput>;
};
export type UserUpdateWithoutMovimientosInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMovimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutVentasInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutVentasInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutVentasInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutVentasInput, Prisma.UserUncheckedCreateWithoutVentasInput>;
};
export type UserUpsertWithoutVentasInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutVentasInput, Prisma.UserUncheckedUpdateWithoutVentasInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutVentasInput, Prisma.UserUncheckedCreateWithoutVentasInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutVentasInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutVentasInput, Prisma.UserUncheckedUpdateWithoutVentasInput>;
};
export type UserUpdateWithoutVentasInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutVentasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutGastosInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutGastosInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutGastosInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutGastosInput, Prisma.UserUncheckedCreateWithoutGastosInput>;
};
export type UserUpsertWithoutGastosInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutGastosInput, Prisma.UserUncheckedUpdateWithoutGastosInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutGastosInput, Prisma.UserUncheckedCreateWithoutGastosInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutGastosInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutGastosInput, Prisma.UserUncheckedUpdateWithoutGastosInput>;
};
export type UserUpdateWithoutGastosInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutGastosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutBitacorasInput = {
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutBitacorasInput = {
    id?: number;
    nombre?: string | null;
    documento: string;
    password: string;
    rol?: $Enums.Rol;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincas?: Prisma.FincaUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedCreateNestedManyWithoutUserInput;
    ventas?: Prisma.VentaUncheckedCreateNestedManyWithoutUserInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutBitacorasInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutBitacorasInput, Prisma.UserUncheckedCreateWithoutBitacorasInput>;
};
export type UserUpsertWithoutBitacorasInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutBitacorasInput, Prisma.UserUncheckedUpdateWithoutBitacorasInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutBitacorasInput, Prisma.UserUncheckedCreateWithoutBitacorasInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutBitacorasInput, Prisma.UserUncheckedUpdateWithoutBitacorasInput>;
};
export type UserUpdateWithoutBitacorasInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutBitacorasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    documento?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rol?: Prisma.EnumRolFieldUpdateOperationsInput | $Enums.Rol;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincas?: Prisma.FincaUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    movimientos?: Prisma.MovimientoInventarioUncheckedUpdateManyWithoutUserNestedInput;
    ventas?: Prisma.VentaUncheckedUpdateManyWithoutUserNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    fincas: number;
    refreshTokens: number;
    movimientos: number;
    ventas: number;
    gastos: number;
    bitacoras: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fincas?: boolean | UserCountOutputTypeCountFincasArgs;
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
    movimientos?: boolean | UserCountOutputTypeCountMovimientosArgs;
    ventas?: boolean | UserCountOutputTypeCountVentasArgs;
    gastos?: boolean | UserCountOutputTypeCountGastosArgs;
    bitacoras?: boolean | UserCountOutputTypeCountBitacorasArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFincasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FincaWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokenWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoInventarioWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountVentasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VentaWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountGastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GastoWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountBitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    documento?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fincas?: boolean | Prisma.User$fincasArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    movimientos?: boolean | Prisma.User$movimientosArgs<ExtArgs>;
    ventas?: boolean | Prisma.User$ventasArgs<ExtArgs>;
    gastos?: boolean | Prisma.User$gastosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.User$bitacorasArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    documento?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    documento?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    documento?: boolean;
    password?: boolean;
    rol?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "documento" | "password" | "rol" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    fincas?: boolean | Prisma.User$fincasArgs<ExtArgs>;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    movimientos?: boolean | Prisma.User$movimientosArgs<ExtArgs>;
    ventas?: boolean | Prisma.User$ventasArgs<ExtArgs>;
    gastos?: boolean | Prisma.User$gastosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.User$bitacorasArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        fincas: Prisma.$FincaPayload<ExtArgs>[];
        refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
        movimientos: Prisma.$MovimientoInventarioPayload<ExtArgs>[];
        ventas: Prisma.$VentaPayload<ExtArgs>[];
        gastos: Prisma.$GastoPayload<ExtArgs>[];
        bitacoras: Prisma.$BitacoraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string | null;
        documento: string;
        password: string;
        rol: $Enums.Rol;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fincas<T extends Prisma.User$fincasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$fincasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FincaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movimientos<T extends Prisma.User$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoInventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ventas<T extends Prisma.User$ventasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ventasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gastos<T extends Prisma.User$gastosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bitacoras<T extends Prisma.User$bitacorasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly nombre: Prisma.FieldRef<"User", 'String'>;
    readonly documento: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly rol: Prisma.FieldRef<"User", 'Rol'>;
    readonly activo: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.fincas
 */
export type User$fincasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Finca
     */
    select?: Prisma.FincaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Finca
     */
    omit?: Prisma.FincaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FincaInclude<ExtArgs> | null;
    where?: Prisma.FincaWhereInput;
    orderBy?: Prisma.FincaOrderByWithRelationInput | Prisma.FincaOrderByWithRelationInput[];
    cursor?: Prisma.FincaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FincaScalarFieldEnum | Prisma.FincaScalarFieldEnum[];
};
/**
 * User.refreshTokens
 */
export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: Prisma.RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: Prisma.RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokenWhereInput;
    orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[];
};
/**
 * User.movimientos
 */
export type User$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientoInventario
     */
    select?: Prisma.MovimientoInventarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MovimientoInventario
     */
    omit?: Prisma.MovimientoInventarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MovimientoInventarioInclude<ExtArgs> | null;
    where?: Prisma.MovimientoInventarioWhereInput;
    orderBy?: Prisma.MovimientoInventarioOrderByWithRelationInput | Prisma.MovimientoInventarioOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoInventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientoInventarioScalarFieldEnum | Prisma.MovimientoInventarioScalarFieldEnum[];
};
/**
 * User.ventas
 */
export type User$ventasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venta
     */
    select?: Prisma.VentaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Venta
     */
    omit?: Prisma.VentaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VentaInclude<ExtArgs> | null;
    where?: Prisma.VentaWhereInput;
    orderBy?: Prisma.VentaOrderByWithRelationInput | Prisma.VentaOrderByWithRelationInput[];
    cursor?: Prisma.VentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VentaScalarFieldEnum | Prisma.VentaScalarFieldEnum[];
};
/**
 * User.gastos
 */
export type User$gastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: Prisma.GastoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gasto
     */
    omit?: Prisma.GastoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GastoInclude<ExtArgs> | null;
    where?: Prisma.GastoWhereInput;
    orderBy?: Prisma.GastoOrderByWithRelationInput | Prisma.GastoOrderByWithRelationInput[];
    cursor?: Prisma.GastoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GastoScalarFieldEnum | Prisma.GastoScalarFieldEnum[];
};
/**
 * User.bitacoras
 */
export type User$bitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: Prisma.BitacoraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BitacoraInclude<ExtArgs> | null;
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    cursor?: Prisma.BitacoraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map