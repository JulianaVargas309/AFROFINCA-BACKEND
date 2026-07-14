import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Gasto
 *
 */
export type GastoModel = runtime.Types.Result.DefaultSelection<Prisma.$GastoPayload>;
export type AggregateGasto = {
    _count: GastoCountAggregateOutputType | null;
    _avg: GastoAvgAggregateOutputType | null;
    _sum: GastoSumAggregateOutputType | null;
    _min: GastoMinAggregateOutputType | null;
    _max: GastoMaxAggregateOutputType | null;
};
export type GastoAvgAggregateOutputType = {
    id: number | null;
    monto: number | null;
    proveedorId: number | null;
    cultivoId: number | null;
    fincaId: number | null;
    loteId: number | null;
    userId: number | null;
};
export type GastoSumAggregateOutputType = {
    id: number | null;
    monto: number | null;
    proveedorId: number | null;
    cultivoId: number | null;
    fincaId: number | null;
    loteId: number | null;
    userId: number | null;
};
export type GastoMinAggregateOutputType = {
    id: number | null;
    descripcion: string | null;
    monto: number | null;
    categoria: $Enums.CategoriaGasto | null;
    fecha: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    proveedorId: number | null;
    cultivoId: number | null;
    fincaId: number | null;
    loteId: number | null;
    userId: number | null;
};
export type GastoMaxAggregateOutputType = {
    id: number | null;
    descripcion: string | null;
    monto: number | null;
    categoria: $Enums.CategoriaGasto | null;
    fecha: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    proveedorId: number | null;
    cultivoId: number | null;
    fincaId: number | null;
    loteId: number | null;
    userId: number | null;
};
export type GastoCountAggregateOutputType = {
    id: number;
    descripcion: number;
    monto: number;
    categoria: number;
    fecha: number;
    createdAt: number;
    updatedAt: number;
    proveedorId: number;
    cultivoId: number;
    fincaId: number;
    loteId: number;
    userId: number;
    _all: number;
};
export type GastoAvgAggregateInputType = {
    id?: true;
    monto?: true;
    proveedorId?: true;
    cultivoId?: true;
    fincaId?: true;
    loteId?: true;
    userId?: true;
};
export type GastoSumAggregateInputType = {
    id?: true;
    monto?: true;
    proveedorId?: true;
    cultivoId?: true;
    fincaId?: true;
    loteId?: true;
    userId?: true;
};
export type GastoMinAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    categoria?: true;
    fecha?: true;
    createdAt?: true;
    updatedAt?: true;
    proveedorId?: true;
    cultivoId?: true;
    fincaId?: true;
    loteId?: true;
    userId?: true;
};
export type GastoMaxAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    categoria?: true;
    fecha?: true;
    createdAt?: true;
    updatedAt?: true;
    proveedorId?: true;
    cultivoId?: true;
    fincaId?: true;
    loteId?: true;
    userId?: true;
};
export type GastoCountAggregateInputType = {
    id?: true;
    descripcion?: true;
    monto?: true;
    categoria?: true;
    fecha?: true;
    createdAt?: true;
    updatedAt?: true;
    proveedorId?: true;
    cultivoId?: true;
    fincaId?: true;
    loteId?: true;
    userId?: true;
    _all?: true;
};
export type GastoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Gasto to aggregate.
     */
    where?: Prisma.GastoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Gastos to fetch.
     */
    orderBy?: Prisma.GastoOrderByWithRelationInput | Prisma.GastoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.GastoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Gastos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Gastos
    **/
    _count?: true | GastoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: GastoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: GastoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: GastoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: GastoMaxAggregateInputType;
};
export type GetGastoAggregateType<T extends GastoAggregateArgs> = {
    [P in keyof T & keyof AggregateGasto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGasto[P]> : Prisma.GetScalarType<T[P], AggregateGasto[P]>;
};
export type GastoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GastoWhereInput;
    orderBy?: Prisma.GastoOrderByWithAggregationInput | Prisma.GastoOrderByWithAggregationInput[];
    by: Prisma.GastoScalarFieldEnum[] | Prisma.GastoScalarFieldEnum;
    having?: Prisma.GastoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GastoCountAggregateInputType | true;
    _avg?: GastoAvgAggregateInputType;
    _sum?: GastoSumAggregateInputType;
    _min?: GastoMinAggregateInputType;
    _max?: GastoMaxAggregateInputType;
};
export type GastoGroupByOutputType = {
    id: number;
    descripcion: string;
    monto: number;
    categoria: $Enums.CategoriaGasto | null;
    fecha: Date;
    createdAt: Date;
    updatedAt: Date;
    proveedorId: number | null;
    cultivoId: number | null;
    fincaId: number | null;
    loteId: number | null;
    userId: number;
    _count: GastoCountAggregateOutputType | null;
    _avg: GastoAvgAggregateOutputType | null;
    _sum: GastoSumAggregateOutputType | null;
    _min: GastoMinAggregateOutputType | null;
    _max: GastoMaxAggregateOutputType | null;
};
export type GetGastoGroupByPayload<T extends GastoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GastoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GastoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GastoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GastoGroupByOutputType[P]>;
}>>;
export type GastoWhereInput = {
    AND?: Prisma.GastoWhereInput | Prisma.GastoWhereInput[];
    OR?: Prisma.GastoWhereInput[];
    NOT?: Prisma.GastoWhereInput | Prisma.GastoWhereInput[];
    id?: Prisma.IntFilter<"Gasto"> | number;
    descripcion?: Prisma.StringFilter<"Gasto"> | string;
    monto?: Prisma.FloatFilter<"Gasto"> | number;
    categoria?: Prisma.EnumCategoriaGastoNullableFilter<"Gasto"> | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    proveedorId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    cultivoId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    fincaId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    loteId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    userId?: Prisma.IntFilter<"Gasto"> | number;
    proveedor?: Prisma.XOR<Prisma.ProveedorNullableScalarRelationFilter, Prisma.ProveedorWhereInput> | null;
    cultivo?: Prisma.XOR<Prisma.CultivoNullableScalarRelationFilter, Prisma.CultivoWhereInput> | null;
    finca?: Prisma.XOR<Prisma.FincaNullableScalarRelationFilter, Prisma.FincaWhereInput> | null;
    lote?: Prisma.XOR<Prisma.LoteNullableScalarRelationFilter, Prisma.LoteWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type GastoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cultivoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fincaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    loteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    proveedor?: Prisma.ProveedorOrderByWithRelationInput;
    cultivo?: Prisma.CultivoOrderByWithRelationInput;
    finca?: Prisma.FincaOrderByWithRelationInput;
    lote?: Prisma.LoteOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type GastoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.GastoWhereInput | Prisma.GastoWhereInput[];
    OR?: Prisma.GastoWhereInput[];
    NOT?: Prisma.GastoWhereInput | Prisma.GastoWhereInput[];
    descripcion?: Prisma.StringFilter<"Gasto"> | string;
    monto?: Prisma.FloatFilter<"Gasto"> | number;
    categoria?: Prisma.EnumCategoriaGastoNullableFilter<"Gasto"> | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    proveedorId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    cultivoId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    fincaId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    loteId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    userId?: Prisma.IntFilter<"Gasto"> | number;
    proveedor?: Prisma.XOR<Prisma.ProveedorNullableScalarRelationFilter, Prisma.ProveedorWhereInput> | null;
    cultivo?: Prisma.XOR<Prisma.CultivoNullableScalarRelationFilter, Prisma.CultivoWhereInput> | null;
    finca?: Prisma.XOR<Prisma.FincaNullableScalarRelationFilter, Prisma.FincaWhereInput> | null;
    lote?: Prisma.XOR<Prisma.LoteNullableScalarRelationFilter, Prisma.LoteWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type GastoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cultivoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fincaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    loteId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.GastoCountOrderByAggregateInput;
    _avg?: Prisma.GastoAvgOrderByAggregateInput;
    _max?: Prisma.GastoMaxOrderByAggregateInput;
    _min?: Prisma.GastoMinOrderByAggregateInput;
    _sum?: Prisma.GastoSumOrderByAggregateInput;
};
export type GastoScalarWhereWithAggregatesInput = {
    AND?: Prisma.GastoScalarWhereWithAggregatesInput | Prisma.GastoScalarWhereWithAggregatesInput[];
    OR?: Prisma.GastoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GastoScalarWhereWithAggregatesInput | Prisma.GastoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Gasto"> | number;
    descripcion?: Prisma.StringWithAggregatesFilter<"Gasto"> | string;
    monto?: Prisma.FloatWithAggregatesFilter<"Gasto"> | number;
    categoria?: Prisma.EnumCategoriaGastoNullableWithAggregatesFilter<"Gasto"> | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Gasto"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Gasto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Gasto"> | Date | string;
    proveedorId?: Prisma.IntNullableWithAggregatesFilter<"Gasto"> | number | null;
    cultivoId?: Prisma.IntNullableWithAggregatesFilter<"Gasto"> | number | null;
    fincaId?: Prisma.IntNullableWithAggregatesFilter<"Gasto"> | number | null;
    loteId?: Prisma.IntNullableWithAggregatesFilter<"Gasto"> | number | null;
    userId?: Prisma.IntWithAggregatesFilter<"Gasto"> | number;
};
export type GastoCreateInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedor?: Prisma.ProveedorCreateNestedOneWithoutGastosInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutGastosInput;
    finca?: Prisma.FincaCreateNestedOneWithoutGastosInput;
    lote?: Prisma.LoteCreateNestedOneWithoutGastosInput;
    user: Prisma.UserCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoUpdateInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedor?: Prisma.ProveedorUpdateOneWithoutGastosNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutGastosNestedInput;
    finca?: Prisma.FincaUpdateOneWithoutGastosNestedInput;
    lote?: Prisma.LoteUpdateOneWithoutGastosNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoCreateManyInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoUpdateManyMutationInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GastoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoListRelationFilter = {
    every?: Prisma.GastoWhereInput;
    some?: Prisma.GastoWhereInput;
    none?: Prisma.GastoWhereInput;
};
export type GastoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GastoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GastoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GastoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GastoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GastoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type GastoCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput> | Prisma.GastoCreateWithoutUserInput[] | Prisma.GastoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutUserInput | Prisma.GastoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GastoCreateManyUserInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput> | Prisma.GastoCreateWithoutUserInput[] | Prisma.GastoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutUserInput | Prisma.GastoCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.GastoCreateManyUserInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput> | Prisma.GastoCreateWithoutUserInput[] | Prisma.GastoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutUserInput | Prisma.GastoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutUserInput | Prisma.GastoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GastoCreateManyUserInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutUserInput | Prisma.GastoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutUserInput | Prisma.GastoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput> | Prisma.GastoCreateWithoutUserInput[] | Prisma.GastoUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutUserInput | Prisma.GastoCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutUserInput | Prisma.GastoUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.GastoCreateManyUserInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutUserInput | Prisma.GastoUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutUserInput | Prisma.GastoUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput> | Prisma.GastoCreateWithoutFincaInput[] | Prisma.GastoUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutFincaInput | Prisma.GastoCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.GastoCreateManyFincaInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUncheckedCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput> | Prisma.GastoCreateWithoutFincaInput[] | Prisma.GastoUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutFincaInput | Prisma.GastoCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.GastoCreateManyFincaInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput> | Prisma.GastoCreateWithoutFincaInput[] | Prisma.GastoUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutFincaInput | Prisma.GastoCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutFincaInput | Prisma.GastoUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.GastoCreateManyFincaInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutFincaInput | Prisma.GastoUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutFincaInput | Prisma.GastoUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoUncheckedUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput> | Prisma.GastoCreateWithoutFincaInput[] | Prisma.GastoUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutFincaInput | Prisma.GastoCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutFincaInput | Prisma.GastoUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.GastoCreateManyFincaInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutFincaInput | Prisma.GastoUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutFincaInput | Prisma.GastoUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput> | Prisma.GastoCreateWithoutLoteInput[] | Prisma.GastoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutLoteInput | Prisma.GastoCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.GastoCreateManyLoteInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUncheckedCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput> | Prisma.GastoCreateWithoutLoteInput[] | Prisma.GastoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutLoteInput | Prisma.GastoCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.GastoCreateManyLoteInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput> | Prisma.GastoCreateWithoutLoteInput[] | Prisma.GastoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutLoteInput | Prisma.GastoCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutLoteInput | Prisma.GastoUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.GastoCreateManyLoteInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutLoteInput | Prisma.GastoUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutLoteInput | Prisma.GastoUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput> | Prisma.GastoCreateWithoutLoteInput[] | Prisma.GastoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutLoteInput | Prisma.GastoCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutLoteInput | Prisma.GastoUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.GastoCreateManyLoteInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutLoteInput | Prisma.GastoUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutLoteInput | Prisma.GastoUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoCreateNestedManyWithoutCultivoInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput> | Prisma.GastoCreateWithoutCultivoInput[] | Prisma.GastoUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutCultivoInput | Prisma.GastoCreateOrConnectWithoutCultivoInput[];
    createMany?: Prisma.GastoCreateManyCultivoInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUncheckedCreateNestedManyWithoutCultivoInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput> | Prisma.GastoCreateWithoutCultivoInput[] | Prisma.GastoUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutCultivoInput | Prisma.GastoCreateOrConnectWithoutCultivoInput[];
    createMany?: Prisma.GastoCreateManyCultivoInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUpdateManyWithoutCultivoNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput> | Prisma.GastoCreateWithoutCultivoInput[] | Prisma.GastoUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutCultivoInput | Prisma.GastoCreateOrConnectWithoutCultivoInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutCultivoInput | Prisma.GastoUpsertWithWhereUniqueWithoutCultivoInput[];
    createMany?: Prisma.GastoCreateManyCultivoInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutCultivoInput | Prisma.GastoUpdateWithWhereUniqueWithoutCultivoInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutCultivoInput | Prisma.GastoUpdateManyWithWhereWithoutCultivoInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoUncheckedUpdateManyWithoutCultivoNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput> | Prisma.GastoCreateWithoutCultivoInput[] | Prisma.GastoUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutCultivoInput | Prisma.GastoCreateOrConnectWithoutCultivoInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutCultivoInput | Prisma.GastoUpsertWithWhereUniqueWithoutCultivoInput[];
    createMany?: Prisma.GastoCreateManyCultivoInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutCultivoInput | Prisma.GastoUpdateWithWhereUniqueWithoutCultivoInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutCultivoInput | Prisma.GastoUpdateManyWithWhereWithoutCultivoInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput> | Prisma.GastoCreateWithoutProveedorInput[] | Prisma.GastoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutProveedorInput | Prisma.GastoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.GastoCreateManyProveedorInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput> | Prisma.GastoCreateWithoutProveedorInput[] | Prisma.GastoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutProveedorInput | Prisma.GastoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.GastoCreateManyProveedorInputEnvelope;
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
};
export type GastoUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput> | Prisma.GastoCreateWithoutProveedorInput[] | Prisma.GastoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutProveedorInput | Prisma.GastoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.GastoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.GastoCreateManyProveedorInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.GastoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutProveedorInput | Prisma.GastoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type GastoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput> | Prisma.GastoCreateWithoutProveedorInput[] | Prisma.GastoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.GastoCreateOrConnectWithoutProveedorInput | Prisma.GastoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.GastoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.GastoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.GastoCreateManyProveedorInputEnvelope;
    set?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    disconnect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    delete?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    connect?: Prisma.GastoWhereUniqueInput | Prisma.GastoWhereUniqueInput[];
    update?: Prisma.GastoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.GastoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.GastoUpdateManyWithWhereWithoutProveedorInput | Prisma.GastoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
};
export type NullableEnumCategoriaGastoFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaGasto | null;
};
export type GastoCreateWithoutUserInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedor?: Prisma.ProveedorCreateNestedOneWithoutGastosInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutGastosInput;
    finca?: Prisma.FincaCreateNestedOneWithoutGastosInput;
    lote?: Prisma.LoteCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateWithoutUserInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
};
export type GastoCreateOrConnectWithoutUserInput = {
    where: Prisma.GastoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput>;
};
export type GastoCreateManyUserInputEnvelope = {
    data: Prisma.GastoCreateManyUserInput | Prisma.GastoCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type GastoUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.GastoWhereUniqueInput;
    update: Prisma.XOR<Prisma.GastoUpdateWithoutUserInput, Prisma.GastoUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.GastoCreateWithoutUserInput, Prisma.GastoUncheckedCreateWithoutUserInput>;
};
export type GastoUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.GastoWhereUniqueInput;
    data: Prisma.XOR<Prisma.GastoUpdateWithoutUserInput, Prisma.GastoUncheckedUpdateWithoutUserInput>;
};
export type GastoUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.GastoScalarWhereInput;
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyWithoutUserInput>;
};
export type GastoScalarWhereInput = {
    AND?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
    OR?: Prisma.GastoScalarWhereInput[];
    NOT?: Prisma.GastoScalarWhereInput | Prisma.GastoScalarWhereInput[];
    id?: Prisma.IntFilter<"Gasto"> | number;
    descripcion?: Prisma.StringFilter<"Gasto"> | string;
    monto?: Prisma.FloatFilter<"Gasto"> | number;
    categoria?: Prisma.EnumCategoriaGastoNullableFilter<"Gasto"> | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Gasto"> | Date | string;
    proveedorId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    cultivoId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    fincaId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    loteId?: Prisma.IntNullableFilter<"Gasto"> | number | null;
    userId?: Prisma.IntFilter<"Gasto"> | number;
};
export type GastoCreateWithoutFincaInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedor?: Prisma.ProveedorCreateNestedOneWithoutGastosInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutGastosInput;
    lote?: Prisma.LoteCreateNestedOneWithoutGastosInput;
    user: Prisma.UserCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateWithoutFincaInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoCreateOrConnectWithoutFincaInput = {
    where: Prisma.GastoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput>;
};
export type GastoCreateManyFincaInputEnvelope = {
    data: Prisma.GastoCreateManyFincaInput | Prisma.GastoCreateManyFincaInput[];
    skipDuplicates?: boolean;
};
export type GastoUpsertWithWhereUniqueWithoutFincaInput = {
    where: Prisma.GastoWhereUniqueInput;
    update: Prisma.XOR<Prisma.GastoUpdateWithoutFincaInput, Prisma.GastoUncheckedUpdateWithoutFincaInput>;
    create: Prisma.XOR<Prisma.GastoCreateWithoutFincaInput, Prisma.GastoUncheckedCreateWithoutFincaInput>;
};
export type GastoUpdateWithWhereUniqueWithoutFincaInput = {
    where: Prisma.GastoWhereUniqueInput;
    data: Prisma.XOR<Prisma.GastoUpdateWithoutFincaInput, Prisma.GastoUncheckedUpdateWithoutFincaInput>;
};
export type GastoUpdateManyWithWhereWithoutFincaInput = {
    where: Prisma.GastoScalarWhereInput;
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyWithoutFincaInput>;
};
export type GastoCreateWithoutLoteInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedor?: Prisma.ProveedorCreateNestedOneWithoutGastosInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutGastosInput;
    finca?: Prisma.FincaCreateNestedOneWithoutGastosInput;
    user: Prisma.UserCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateWithoutLoteInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    userId: number;
};
export type GastoCreateOrConnectWithoutLoteInput = {
    where: Prisma.GastoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput>;
};
export type GastoCreateManyLoteInputEnvelope = {
    data: Prisma.GastoCreateManyLoteInput | Prisma.GastoCreateManyLoteInput[];
    skipDuplicates?: boolean;
};
export type GastoUpsertWithWhereUniqueWithoutLoteInput = {
    where: Prisma.GastoWhereUniqueInput;
    update: Prisma.XOR<Prisma.GastoUpdateWithoutLoteInput, Prisma.GastoUncheckedUpdateWithoutLoteInput>;
    create: Prisma.XOR<Prisma.GastoCreateWithoutLoteInput, Prisma.GastoUncheckedCreateWithoutLoteInput>;
};
export type GastoUpdateWithWhereUniqueWithoutLoteInput = {
    where: Prisma.GastoWhereUniqueInput;
    data: Prisma.XOR<Prisma.GastoUpdateWithoutLoteInput, Prisma.GastoUncheckedUpdateWithoutLoteInput>;
};
export type GastoUpdateManyWithWhereWithoutLoteInput = {
    where: Prisma.GastoScalarWhereInput;
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyWithoutLoteInput>;
};
export type GastoCreateWithoutCultivoInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedor?: Prisma.ProveedorCreateNestedOneWithoutGastosInput;
    finca?: Prisma.FincaCreateNestedOneWithoutGastosInput;
    lote?: Prisma.LoteCreateNestedOneWithoutGastosInput;
    user: Prisma.UserCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateWithoutCultivoInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoCreateOrConnectWithoutCultivoInput = {
    where: Prisma.GastoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput>;
};
export type GastoCreateManyCultivoInputEnvelope = {
    data: Prisma.GastoCreateManyCultivoInput | Prisma.GastoCreateManyCultivoInput[];
    skipDuplicates?: boolean;
};
export type GastoUpsertWithWhereUniqueWithoutCultivoInput = {
    where: Prisma.GastoWhereUniqueInput;
    update: Prisma.XOR<Prisma.GastoUpdateWithoutCultivoInput, Prisma.GastoUncheckedUpdateWithoutCultivoInput>;
    create: Prisma.XOR<Prisma.GastoCreateWithoutCultivoInput, Prisma.GastoUncheckedCreateWithoutCultivoInput>;
};
export type GastoUpdateWithWhereUniqueWithoutCultivoInput = {
    where: Prisma.GastoWhereUniqueInput;
    data: Prisma.XOR<Prisma.GastoUpdateWithoutCultivoInput, Prisma.GastoUncheckedUpdateWithoutCultivoInput>;
};
export type GastoUpdateManyWithWhereWithoutCultivoInput = {
    where: Prisma.GastoScalarWhereInput;
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyWithoutCultivoInput>;
};
export type GastoCreateWithoutProveedorInput = {
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutGastosInput;
    finca?: Prisma.FincaCreateNestedOneWithoutGastosInput;
    lote?: Prisma.LoteCreateNestedOneWithoutGastosInput;
    user: Prisma.UserCreateNestedOneWithoutGastosInput;
};
export type GastoUncheckedCreateWithoutProveedorInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoCreateOrConnectWithoutProveedorInput = {
    where: Prisma.GastoWhereUniqueInput;
    create: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput>;
};
export type GastoCreateManyProveedorInputEnvelope = {
    data: Prisma.GastoCreateManyProveedorInput | Prisma.GastoCreateManyProveedorInput[];
    skipDuplicates?: boolean;
};
export type GastoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.GastoWhereUniqueInput;
    update: Prisma.XOR<Prisma.GastoUpdateWithoutProveedorInput, Prisma.GastoUncheckedUpdateWithoutProveedorInput>;
    create: Prisma.XOR<Prisma.GastoCreateWithoutProveedorInput, Prisma.GastoUncheckedCreateWithoutProveedorInput>;
};
export type GastoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.GastoWhereUniqueInput;
    data: Prisma.XOR<Prisma.GastoUpdateWithoutProveedorInput, Prisma.GastoUncheckedUpdateWithoutProveedorInput>;
};
export type GastoUpdateManyWithWhereWithoutProveedorInput = {
    where: Prisma.GastoScalarWhereInput;
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyWithoutProveedorInput>;
};
export type GastoCreateManyUserInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
};
export type GastoUpdateWithoutUserInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedor?: Prisma.ProveedorUpdateOneWithoutGastosNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutGastosNestedInput;
    finca?: Prisma.FincaUpdateOneWithoutGastosNestedInput;
    lote?: Prisma.LoteUpdateOneWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type GastoUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type GastoCreateManyFincaInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoUpdateWithoutFincaInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedor?: Prisma.ProveedorUpdateOneWithoutGastosNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutGastosNestedInput;
    lote?: Prisma.LoteUpdateOneWithoutGastosNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoUncheckedUpdateManyWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoCreateManyLoteInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    cultivoId?: number | null;
    fincaId?: number | null;
    userId: number;
};
export type GastoUpdateWithoutLoteInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedor?: Prisma.ProveedorUpdateOneWithoutGastosNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutGastosNestedInput;
    finca?: Prisma.FincaUpdateOneWithoutGastosNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoUncheckedUpdateManyWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoCreateManyCultivoInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    proveedorId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoUpdateWithoutCultivoInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedor?: Prisma.ProveedorUpdateOneWithoutGastosNestedInput;
    finca?: Prisma.FincaUpdateOneWithoutGastosNestedInput;
    lote?: Prisma.LoteUpdateOneWithoutGastosNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateWithoutCultivoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoUncheckedUpdateManyWithoutCultivoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoCreateManyProveedorInput = {
    id?: number;
    descripcion: string;
    monto: number;
    categoria?: $Enums.CategoriaGasto | null;
    fecha?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivoId?: number | null;
    fincaId?: number | null;
    loteId?: number | null;
    userId: number;
};
export type GastoUpdateWithoutProveedorInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivo?: Prisma.CultivoUpdateOneWithoutGastosNestedInput;
    finca?: Prisma.FincaUpdateOneWithoutGastosNestedInput;
    lote?: Prisma.LoteUpdateOneWithoutGastosNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutGastosNestedInput;
};
export type GastoUncheckedUpdateWithoutProveedorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoUncheckedUpdateManyWithoutProveedorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.FloatFieldUpdateOperationsInput | number;
    categoria?: Prisma.NullableEnumCategoriaGastoFieldUpdateOperationsInput | $Enums.CategoriaGasto | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fincaId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    loteId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type GastoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    categoria?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proveedorId?: boolean;
    cultivoId?: boolean;
    fincaId?: boolean;
    loteId?: boolean;
    userId?: boolean;
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gasto"]>;
export type GastoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    categoria?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proveedorId?: boolean;
    cultivoId?: boolean;
    fincaId?: boolean;
    loteId?: boolean;
    userId?: boolean;
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gasto"]>;
export type GastoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    categoria?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proveedorId?: boolean;
    cultivoId?: boolean;
    fincaId?: boolean;
    loteId?: boolean;
    userId?: boolean;
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["gasto"]>;
export type GastoSelectScalar = {
    id?: boolean;
    descripcion?: boolean;
    monto?: boolean;
    categoria?: boolean;
    fecha?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    proveedorId?: boolean;
    cultivoId?: boolean;
    fincaId?: boolean;
    loteId?: boolean;
    userId?: boolean;
};
export type GastoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "descripcion" | "monto" | "categoria" | "fecha" | "createdAt" | "updatedAt" | "proveedorId" | "cultivoId" | "fincaId" | "loteId" | "userId", ExtArgs["result"]["gasto"]>;
export type GastoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GastoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type GastoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.Gasto$proveedorArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Gasto$cultivoArgs<ExtArgs>;
    finca?: boolean | Prisma.Gasto$fincaArgs<ExtArgs>;
    lote?: boolean | Prisma.Gasto$loteArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $GastoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Gasto";
    objects: {
        proveedor: Prisma.$ProveedorPayload<ExtArgs> | null;
        cultivo: Prisma.$CultivoPayload<ExtArgs> | null;
        finca: Prisma.$FincaPayload<ExtArgs> | null;
        lote: Prisma.$LotePayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        descripcion: string;
        monto: number;
        categoria: $Enums.CategoriaGasto | null;
        fecha: Date;
        createdAt: Date;
        updatedAt: Date;
        proveedorId: number | null;
        cultivoId: number | null;
        fincaId: number | null;
        loteId: number | null;
        userId: number;
    }, ExtArgs["result"]["gasto"]>;
    composites: {};
};
export type GastoGetPayload<S extends boolean | null | undefined | GastoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GastoPayload, S>;
export type GastoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GastoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GastoCountAggregateInputType | true;
};
export interface GastoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Gasto'];
        meta: {
            name: 'Gasto';
        };
    };
    /**
     * Find zero or one Gasto that matches the filter.
     * @param {GastoFindUniqueArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastoFindUniqueArgs>(args: Prisma.SelectSubset<T, GastoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Gasto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastoFindUniqueOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GastoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Gasto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastoFindFirstArgs>(args?: Prisma.SelectSubset<T, GastoFindFirstArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Gasto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindFirstOrThrowArgs} args - Arguments to find a Gasto
     * @example
     * // Get one Gasto
     * const gasto = await prisma.gasto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GastoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Gastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gastos
     * const gastos = await prisma.gasto.findMany()
     *
     * // Get first 10 Gastos
     * const gastos = await prisma.gasto.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const gastoWithIdOnly = await prisma.gasto.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GastoFindManyArgs>(args?: Prisma.SelectSubset<T, GastoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Gasto.
     * @param {GastoCreateArgs} args - Arguments to create a Gasto.
     * @example
     * // Create one Gasto
     * const Gasto = await prisma.gasto.create({
     *   data: {
     *     // ... data to create a Gasto
     *   }
     * })
     *
     */
    create<T extends GastoCreateArgs>(args: Prisma.SelectSubset<T, GastoCreateArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Gastos.
     * @param {GastoCreateManyArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GastoCreateManyArgs>(args?: Prisma.SelectSubset<T, GastoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Gastos and returns the data saved in the database.
     * @param {GastoCreateManyAndReturnArgs} args - Arguments to create many Gastos.
     * @example
     * // Create many Gastos
     * const gasto = await prisma.gasto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GastoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GastoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Gasto.
     * @param {GastoDeleteArgs} args - Arguments to delete one Gasto.
     * @example
     * // Delete one Gasto
     * const Gasto = await prisma.gasto.delete({
     *   where: {
     *     // ... filter to delete one Gasto
     *   }
     * })
     *
     */
    delete<T extends GastoDeleteArgs>(args: Prisma.SelectSubset<T, GastoDeleteArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Gasto.
     * @param {GastoUpdateArgs} args - Arguments to update one Gasto.
     * @example
     * // Update one Gasto
     * const gasto = await prisma.gasto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GastoUpdateArgs>(args: Prisma.SelectSubset<T, GastoUpdateArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Gastos.
     * @param {GastoDeleteManyArgs} args - Arguments to filter Gastos to delete.
     * @example
     * // Delete a few Gastos
     * const { count } = await prisma.gasto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GastoDeleteManyArgs>(args?: Prisma.SelectSubset<T, GastoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GastoUpdateManyArgs>(args: Prisma.SelectSubset<T, GastoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Gastos and returns the data updated in the database.
     * @param {GastoUpdateManyAndReturnArgs} args - Arguments to update many Gastos.
     * @example
     * // Update many Gastos
     * const gasto = await prisma.gasto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Gastos and only return the `id`
     * const gastoWithIdOnly = await prisma.gasto.updateManyAndReturn({
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
    updateManyAndReturn<T extends GastoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GastoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Gasto.
     * @param {GastoUpsertArgs} args - Arguments to update or create a Gasto.
     * @example
     * // Update or create a Gasto
     * const gasto = await prisma.gasto.upsert({
     *   create: {
     *     // ... data to create a Gasto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gasto we want to update
     *   }
     * })
     */
    upsert<T extends GastoUpsertArgs>(args: Prisma.SelectSubset<T, GastoUpsertArgs<ExtArgs>>): Prisma.Prisma__GastoClient<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Gastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoCountArgs} args - Arguments to filter Gastos to count.
     * @example
     * // Count the number of Gastos
     * const count = await prisma.gasto.count({
     *   where: {
     *     // ... the filter for the Gastos we want to count
     *   }
     * })
    **/
    count<T extends GastoCountArgs>(args?: Prisma.Subset<T, GastoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GastoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastoAggregateArgs>(args: Prisma.Subset<T, GastoAggregateArgs>): Prisma.PrismaPromise<GetGastoAggregateType<T>>;
    /**
     * Group by Gasto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends GastoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GastoGroupByArgs['orderBy'];
    } : {
        orderBy?: GastoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GastoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Gasto model
     */
    readonly fields: GastoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Gasto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__GastoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proveedor<T extends Prisma.Gasto$proveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gasto$proveedorArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cultivo<T extends Prisma.Gasto$cultivoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gasto$cultivoArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    finca<T extends Prisma.Gasto$fincaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gasto$fincaArgs<ExtArgs>>): Prisma.Prisma__FincaClient<runtime.Types.Result.GetResult<Prisma.$FincaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lote<T extends Prisma.Gasto$loteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Gasto$loteArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Gasto model
 */
export interface GastoFieldRefs {
    readonly id: Prisma.FieldRef<"Gasto", 'Int'>;
    readonly descripcion: Prisma.FieldRef<"Gasto", 'String'>;
    readonly monto: Prisma.FieldRef<"Gasto", 'Float'>;
    readonly categoria: Prisma.FieldRef<"Gasto", 'CategoriaGasto'>;
    readonly fecha: Prisma.FieldRef<"Gasto", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Gasto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Gasto", 'DateTime'>;
    readonly proveedorId: Prisma.FieldRef<"Gasto", 'Int'>;
    readonly cultivoId: Prisma.FieldRef<"Gasto", 'Int'>;
    readonly fincaId: Prisma.FieldRef<"Gasto", 'Int'>;
    readonly loteId: Prisma.FieldRef<"Gasto", 'Int'>;
    readonly userId: Prisma.FieldRef<"Gasto", 'Int'>;
}
/**
 * Gasto findUnique
 */
export type GastoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gasto to fetch.
     */
    where: Prisma.GastoWhereUniqueInput;
};
/**
 * Gasto findUniqueOrThrow
 */
export type GastoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gasto to fetch.
     */
    where: Prisma.GastoWhereUniqueInput;
};
/**
 * Gasto findFirst
 */
export type GastoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gasto to fetch.
     */
    where?: Prisma.GastoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Gastos to fetch.
     */
    orderBy?: Prisma.GastoOrderByWithRelationInput | Prisma.GastoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Gastos.
     */
    cursor?: Prisma.GastoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Gastos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Gastos.
     */
    distinct?: Prisma.GastoScalarFieldEnum | Prisma.GastoScalarFieldEnum[];
};
/**
 * Gasto findFirstOrThrow
 */
export type GastoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gasto to fetch.
     */
    where?: Prisma.GastoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Gastos to fetch.
     */
    orderBy?: Prisma.GastoOrderByWithRelationInput | Prisma.GastoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Gastos.
     */
    cursor?: Prisma.GastoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Gastos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Gastos.
     */
    distinct?: Prisma.GastoScalarFieldEnum | Prisma.GastoScalarFieldEnum[];
};
/**
 * Gasto findMany
 */
export type GastoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Gastos to fetch.
     */
    where?: Prisma.GastoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Gastos to fetch.
     */
    orderBy?: Prisma.GastoOrderByWithRelationInput | Prisma.GastoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Gastos.
     */
    cursor?: Prisma.GastoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Gastos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Gastos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Gastos.
     */
    distinct?: Prisma.GastoScalarFieldEnum | Prisma.GastoScalarFieldEnum[];
};
/**
 * Gasto create
 */
export type GastoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Gasto.
     */
    data: Prisma.XOR<Prisma.GastoCreateInput, Prisma.GastoUncheckedCreateInput>;
};
/**
 * Gasto createMany
 */
export type GastoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gastos.
     */
    data: Prisma.GastoCreateManyInput | Prisma.GastoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Gasto createManyAndReturn
 */
export type GastoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: Prisma.GastoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gasto
     */
    omit?: Prisma.GastoOmit<ExtArgs> | null;
    /**
     * The data used to create many Gastos.
     */
    data: Prisma.GastoCreateManyInput | Prisma.GastoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GastoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Gasto update
 */
export type GastoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Gasto.
     */
    data: Prisma.XOR<Prisma.GastoUpdateInput, Prisma.GastoUncheckedUpdateInput>;
    /**
     * Choose, which Gasto to update.
     */
    where: Prisma.GastoWhereUniqueInput;
};
/**
 * Gasto updateMany
 */
export type GastoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Gastos.
     */
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyInput>;
    /**
     * Filter which Gastos to update
     */
    where?: Prisma.GastoWhereInput;
    /**
     * Limit how many Gastos to update.
     */
    limit?: number;
};
/**
 * Gasto updateManyAndReturn
 */
export type GastoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gasto
     */
    select?: Prisma.GastoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gasto
     */
    omit?: Prisma.GastoOmit<ExtArgs> | null;
    /**
     * The data used to update Gastos.
     */
    data: Prisma.XOR<Prisma.GastoUpdateManyMutationInput, Prisma.GastoUncheckedUpdateManyInput>;
    /**
     * Filter which Gastos to update
     */
    where?: Prisma.GastoWhereInput;
    /**
     * Limit how many Gastos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.GastoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Gasto upsert
 */
export type GastoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Gasto to update in case it exists.
     */
    where: Prisma.GastoWhereUniqueInput;
    /**
     * In case the Gasto found by the `where` argument doesn't exist, create a new Gasto with this data.
     */
    create: Prisma.XOR<Prisma.GastoCreateInput, Prisma.GastoUncheckedCreateInput>;
    /**
     * In case the Gasto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.GastoUpdateInput, Prisma.GastoUncheckedUpdateInput>;
};
/**
 * Gasto delete
 */
export type GastoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Gasto to delete.
     */
    where: Prisma.GastoWhereUniqueInput;
};
/**
 * Gasto deleteMany
 */
export type GastoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Gastos to delete
     */
    where?: Prisma.GastoWhereInput;
    /**
     * Limit how many Gastos to delete.
     */
    limit?: number;
};
/**
 * Gasto.proveedor
 */
export type Gasto$proveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where?: Prisma.ProveedorWhereInput;
};
/**
 * Gasto.cultivo
 */
export type Gasto$cultivoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultivo
     */
    select?: Prisma.CultivoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Cultivo
     */
    omit?: Prisma.CultivoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CultivoInclude<ExtArgs> | null;
    where?: Prisma.CultivoWhereInput;
};
/**
 * Gasto.finca
 */
export type Gasto$fincaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Gasto.lote
 */
export type Gasto$loteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: Prisma.LoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Lote
     */
    omit?: Prisma.LoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoteInclude<ExtArgs> | null;
    where?: Prisma.LoteWhereInput;
};
/**
 * Gasto without action
 */
export type GastoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Gasto.d.ts.map