import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Lote
 *
 */
export type LoteModel = runtime.Types.Result.DefaultSelection<Prisma.$LotePayload>;
export type AggregateLote = {
    _count: LoteCountAggregateOutputType | null;
    _avg: LoteAvgAggregateOutputType | null;
    _sum: LoteSumAggregateOutputType | null;
    _min: LoteMinAggregateOutputType | null;
    _max: LoteMaxAggregateOutputType | null;
};
export type LoteAvgAggregateOutputType = {
    id: number | null;
    area: number | null;
    fincaId: number | null;
};
export type LoteSumAggregateOutputType = {
    id: number | null;
    area: number | null;
    fincaId: number | null;
};
export type LoteMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    area: number | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    fincaId: number | null;
};
export type LoteMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    area: number | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    fincaId: number | null;
};
export type LoteCountAggregateOutputType = {
    id: number;
    nombre: number;
    area: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    fincaId: number;
    _all: number;
};
export type LoteAvgAggregateInputType = {
    id?: true;
    area?: true;
    fincaId?: true;
};
export type LoteSumAggregateInputType = {
    id?: true;
    area?: true;
    fincaId?: true;
};
export type LoteMinAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    fincaId?: true;
};
export type LoteMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    fincaId?: true;
};
export type LoteCountAggregateInputType = {
    id?: true;
    nombre?: true;
    area?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    fincaId?: true;
    _all?: true;
};
export type LoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lote to aggregate.
     */
    where?: Prisma.LoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lotes to fetch.
     */
    orderBy?: Prisma.LoteOrderByWithRelationInput | Prisma.LoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.LoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Lotes
    **/
    _count?: true | LoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LoteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LoteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LoteMaxAggregateInputType;
};
export type GetLoteAggregateType<T extends LoteAggregateArgs> = {
    [P in keyof T & keyof AggregateLote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLote[P]> : Prisma.GetScalarType<T[P], AggregateLote[P]>;
};
export type LoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LoteWhereInput;
    orderBy?: Prisma.LoteOrderByWithAggregationInput | Prisma.LoteOrderByWithAggregationInput[];
    by: Prisma.LoteScalarFieldEnum[] | Prisma.LoteScalarFieldEnum;
    having?: Prisma.LoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LoteCountAggregateInputType | true;
    _avg?: LoteAvgAggregateInputType;
    _sum?: LoteSumAggregateInputType;
    _min?: LoteMinAggregateInputType;
    _max?: LoteMaxAggregateInputType;
};
export type LoteGroupByOutputType = {
    id: number;
    nombre: string;
    area: number | null;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    fincaId: number;
    _count: LoteCountAggregateOutputType | null;
    _avg: LoteAvgAggregateOutputType | null;
    _sum: LoteSumAggregateOutputType | null;
    _min: LoteMinAggregateOutputType | null;
    _max: LoteMaxAggregateOutputType | null;
};
export type GetLoteGroupByPayload<T extends LoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LoteGroupByOutputType[P]>;
}>>;
export type LoteWhereInput = {
    AND?: Prisma.LoteWhereInput | Prisma.LoteWhereInput[];
    OR?: Prisma.LoteWhereInput[];
    NOT?: Prisma.LoteWhereInput | Prisma.LoteWhereInput[];
    id?: Prisma.IntFilter<"Lote"> | number;
    nombre?: Prisma.StringFilter<"Lote"> | string;
    area?: Prisma.FloatNullableFilter<"Lote"> | number | null;
    descripcion?: Prisma.StringNullableFilter<"Lote"> | string | null;
    activo?: Prisma.BoolFilter<"Lote"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    fincaId?: Prisma.IntFilter<"Lote"> | number;
    finca?: Prisma.XOR<Prisma.FincaScalarRelationFilter, Prisma.FincaWhereInput>;
    cultivos?: Prisma.CultivoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
    jornales?: Prisma.JornalListRelationFilter;
    gastos?: Prisma.GastoListRelationFilter;
};
export type LoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    finca?: Prisma.FincaOrderByWithRelationInput;
    cultivos?: Prisma.CultivoOrderByRelationAggregateInput;
    bitacoras?: Prisma.BitacoraOrderByRelationAggregateInput;
    jornales?: Prisma.JornalOrderByRelationAggregateInput;
    gastos?: Prisma.GastoOrderByRelationAggregateInput;
};
export type LoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.LoteWhereInput | Prisma.LoteWhereInput[];
    OR?: Prisma.LoteWhereInput[];
    NOT?: Prisma.LoteWhereInput | Prisma.LoteWhereInput[];
    nombre?: Prisma.StringFilter<"Lote"> | string;
    area?: Prisma.FloatNullableFilter<"Lote"> | number | null;
    descripcion?: Prisma.StringNullableFilter<"Lote"> | string | null;
    activo?: Prisma.BoolFilter<"Lote"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    fincaId?: Prisma.IntFilter<"Lote"> | number;
    finca?: Prisma.XOR<Prisma.FincaScalarRelationFilter, Prisma.FincaWhereInput>;
    cultivos?: Prisma.CultivoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
    jornales?: Prisma.JornalListRelationFilter;
    gastos?: Prisma.GastoListRelationFilter;
}, "id">;
export type LoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    _count?: Prisma.LoteCountOrderByAggregateInput;
    _avg?: Prisma.LoteAvgOrderByAggregateInput;
    _max?: Prisma.LoteMaxOrderByAggregateInput;
    _min?: Prisma.LoteMinOrderByAggregateInput;
    _sum?: Prisma.LoteSumOrderByAggregateInput;
};
export type LoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.LoteScalarWhereWithAggregatesInput | Prisma.LoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.LoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LoteScalarWhereWithAggregatesInput | Prisma.LoteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Lote"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Lote"> | string;
    area?: Prisma.FloatNullableWithAggregatesFilter<"Lote"> | number | null;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"Lote"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"Lote"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Lote"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Lote"> | Date | string;
    fincaId?: Prisma.IntWithAggregatesFilter<"Lote"> | number;
};
export type LoteCreateInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutLotesInput;
    cultivos?: Prisma.CultivoCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
    cultivos?: Prisma.CultivoUncheckedCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutLotesNestedInput;
    cultivos?: Prisma.CultivoUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivos?: Prisma.CultivoUncheckedUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteCreateManyInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
};
export type LoteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LoteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type LoteListRelationFilter = {
    every?: Prisma.LoteWhereInput;
    some?: Prisma.LoteWhereInput;
    none?: Prisma.LoteWhereInput;
};
export type LoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type LoteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type LoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type LoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type LoteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type LoteScalarRelationFilter = {
    is?: Prisma.LoteWhereInput;
    isNot?: Prisma.LoteWhereInput;
};
export type LoteNullableScalarRelationFilter = {
    is?: Prisma.LoteWhereInput | null;
    isNot?: Prisma.LoteWhereInput | null;
};
export type LoteCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput> | Prisma.LoteCreateWithoutFincaInput[] | Prisma.LoteUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutFincaInput | Prisma.LoteCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.LoteCreateManyFincaInputEnvelope;
    connect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
};
export type LoteUncheckedCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput> | Prisma.LoteCreateWithoutFincaInput[] | Prisma.LoteUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutFincaInput | Prisma.LoteCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.LoteCreateManyFincaInputEnvelope;
    connect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
};
export type LoteUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput> | Prisma.LoteCreateWithoutFincaInput[] | Prisma.LoteUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutFincaInput | Prisma.LoteCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.LoteUpsertWithWhereUniqueWithoutFincaInput | Prisma.LoteUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.LoteCreateManyFincaInputEnvelope;
    set?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    disconnect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    delete?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    connect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    update?: Prisma.LoteUpdateWithWhereUniqueWithoutFincaInput | Prisma.LoteUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.LoteUpdateManyWithWhereWithoutFincaInput | Prisma.LoteUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.LoteScalarWhereInput | Prisma.LoteScalarWhereInput[];
};
export type LoteUncheckedUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput> | Prisma.LoteCreateWithoutFincaInput[] | Prisma.LoteUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutFincaInput | Prisma.LoteCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.LoteUpsertWithWhereUniqueWithoutFincaInput | Prisma.LoteUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.LoteCreateManyFincaInputEnvelope;
    set?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    disconnect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    delete?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    connect?: Prisma.LoteWhereUniqueInput | Prisma.LoteWhereUniqueInput[];
    update?: Prisma.LoteUpdateWithWhereUniqueWithoutFincaInput | Prisma.LoteUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.LoteUpdateManyWithWhereWithoutFincaInput | Prisma.LoteUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.LoteScalarWhereInput | Prisma.LoteScalarWhereInput[];
};
export type LoteCreateNestedOneWithoutCultivosInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutCultivosInput, Prisma.LoteUncheckedCreateWithoutCultivosInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutCultivosInput;
    connect?: Prisma.LoteWhereUniqueInput;
};
export type LoteUpdateOneRequiredWithoutCultivosNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutCultivosInput, Prisma.LoteUncheckedCreateWithoutCultivosInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutCultivosInput;
    upsert?: Prisma.LoteUpsertWithoutCultivosInput;
    connect?: Prisma.LoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoteUpdateToOneWithWhereWithoutCultivosInput, Prisma.LoteUpdateWithoutCultivosInput>, Prisma.LoteUncheckedUpdateWithoutCultivosInput>;
};
export type LoteCreateNestedOneWithoutGastosInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutGastosInput, Prisma.LoteUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutGastosInput;
    connect?: Prisma.LoteWhereUniqueInput;
};
export type LoteUpdateOneWithoutGastosNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutGastosInput, Prisma.LoteUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutGastosInput;
    upsert?: Prisma.LoteUpsertWithoutGastosInput;
    disconnect?: Prisma.LoteWhereInput | boolean;
    delete?: Prisma.LoteWhereInput | boolean;
    connect?: Prisma.LoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoteUpdateToOneWithWhereWithoutGastosInput, Prisma.LoteUpdateWithoutGastosInput>, Prisma.LoteUncheckedUpdateWithoutGastosInput>;
};
export type LoteCreateNestedOneWithoutJornalesInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutJornalesInput, Prisma.LoteUncheckedCreateWithoutJornalesInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutJornalesInput;
    connect?: Prisma.LoteWhereUniqueInput;
};
export type LoteUpdateOneRequiredWithoutJornalesNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutJornalesInput, Prisma.LoteUncheckedCreateWithoutJornalesInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutJornalesInput;
    upsert?: Prisma.LoteUpsertWithoutJornalesInput;
    connect?: Prisma.LoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoteUpdateToOneWithWhereWithoutJornalesInput, Prisma.LoteUpdateWithoutJornalesInput>, Prisma.LoteUncheckedUpdateWithoutJornalesInput>;
};
export type LoteCreateNestedOneWithoutBitacorasInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutBitacorasInput, Prisma.LoteUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutBitacorasInput;
    connect?: Prisma.LoteWhereUniqueInput;
};
export type LoteUpdateOneRequiredWithoutBitacorasNestedInput = {
    create?: Prisma.XOR<Prisma.LoteCreateWithoutBitacorasInput, Prisma.LoteUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.LoteCreateOrConnectWithoutBitacorasInput;
    upsert?: Prisma.LoteUpsertWithoutBitacorasInput;
    connect?: Prisma.LoteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LoteUpdateToOneWithWhereWithoutBitacorasInput, Prisma.LoteUpdateWithoutBitacorasInput>, Prisma.LoteUncheckedUpdateWithoutBitacorasInput>;
};
export type LoteCreateWithoutFincaInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivos?: Prisma.CultivoCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateWithoutFincaInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivos?: Prisma.CultivoUncheckedCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteCreateOrConnectWithoutFincaInput = {
    where: Prisma.LoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput>;
};
export type LoteCreateManyFincaInputEnvelope = {
    data: Prisma.LoteCreateManyFincaInput | Prisma.LoteCreateManyFincaInput[];
    skipDuplicates?: boolean;
};
export type LoteUpsertWithWhereUniqueWithoutFincaInput = {
    where: Prisma.LoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.LoteUpdateWithoutFincaInput, Prisma.LoteUncheckedUpdateWithoutFincaInput>;
    create: Prisma.XOR<Prisma.LoteCreateWithoutFincaInput, Prisma.LoteUncheckedCreateWithoutFincaInput>;
};
export type LoteUpdateWithWhereUniqueWithoutFincaInput = {
    where: Prisma.LoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.LoteUpdateWithoutFincaInput, Prisma.LoteUncheckedUpdateWithoutFincaInput>;
};
export type LoteUpdateManyWithWhereWithoutFincaInput = {
    where: Prisma.LoteScalarWhereInput;
    data: Prisma.XOR<Prisma.LoteUpdateManyMutationInput, Prisma.LoteUncheckedUpdateManyWithoutFincaInput>;
};
export type LoteScalarWhereInput = {
    AND?: Prisma.LoteScalarWhereInput | Prisma.LoteScalarWhereInput[];
    OR?: Prisma.LoteScalarWhereInput[];
    NOT?: Prisma.LoteScalarWhereInput | Prisma.LoteScalarWhereInput[];
    id?: Prisma.IntFilter<"Lote"> | number;
    nombre?: Prisma.StringFilter<"Lote"> | string;
    area?: Prisma.FloatNullableFilter<"Lote"> | number | null;
    descripcion?: Prisma.StringNullableFilter<"Lote"> | string | null;
    activo?: Prisma.BoolFilter<"Lote"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Lote"> | Date | string;
    fincaId?: Prisma.IntFilter<"Lote"> | number;
};
export type LoteCreateWithoutCultivosInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutLotesInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateWithoutCultivosInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteCreateOrConnectWithoutCultivosInput = {
    where: Prisma.LoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoteCreateWithoutCultivosInput, Prisma.LoteUncheckedCreateWithoutCultivosInput>;
};
export type LoteUpsertWithoutCultivosInput = {
    update: Prisma.XOR<Prisma.LoteUpdateWithoutCultivosInput, Prisma.LoteUncheckedUpdateWithoutCultivosInput>;
    create: Prisma.XOR<Prisma.LoteCreateWithoutCultivosInput, Prisma.LoteUncheckedCreateWithoutCultivosInput>;
    where?: Prisma.LoteWhereInput;
};
export type LoteUpdateToOneWithWhereWithoutCultivosInput = {
    where?: Prisma.LoteWhereInput;
    data: Prisma.XOR<Prisma.LoteUpdateWithoutCultivosInput, Prisma.LoteUncheckedUpdateWithoutCultivosInput>;
};
export type LoteUpdateWithoutCultivosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutLotesNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateWithoutCultivosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteCreateWithoutGastosInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutLotesInput;
    cultivos?: Prisma.CultivoCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateWithoutGastosInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
    cultivos?: Prisma.CultivoUncheckedCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteCreateOrConnectWithoutGastosInput = {
    where: Prisma.LoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoteCreateWithoutGastosInput, Prisma.LoteUncheckedCreateWithoutGastosInput>;
};
export type LoteUpsertWithoutGastosInput = {
    update: Prisma.XOR<Prisma.LoteUpdateWithoutGastosInput, Prisma.LoteUncheckedUpdateWithoutGastosInput>;
    create: Prisma.XOR<Prisma.LoteCreateWithoutGastosInput, Prisma.LoteUncheckedCreateWithoutGastosInput>;
    where?: Prisma.LoteWhereInput;
};
export type LoteUpdateToOneWithWhereWithoutGastosInput = {
    where?: Prisma.LoteWhereInput;
    data: Prisma.XOR<Prisma.LoteUpdateWithoutGastosInput, Prisma.LoteUncheckedUpdateWithoutGastosInput>;
};
export type LoteUpdateWithoutGastosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutLotesNestedInput;
    cultivos?: Prisma.CultivoUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateWithoutGastosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivos?: Prisma.CultivoUncheckedUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteCreateWithoutJornalesInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutLotesInput;
    cultivos?: Prisma.CultivoCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateWithoutJornalesInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
    cultivos?: Prisma.CultivoUncheckedCreateNestedManyWithoutLoteInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteCreateOrConnectWithoutJornalesInput = {
    where: Prisma.LoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoteCreateWithoutJornalesInput, Prisma.LoteUncheckedCreateWithoutJornalesInput>;
};
export type LoteUpsertWithoutJornalesInput = {
    update: Prisma.XOR<Prisma.LoteUpdateWithoutJornalesInput, Prisma.LoteUncheckedUpdateWithoutJornalesInput>;
    create: Prisma.XOR<Prisma.LoteCreateWithoutJornalesInput, Prisma.LoteUncheckedCreateWithoutJornalesInput>;
    where?: Prisma.LoteWhereInput;
};
export type LoteUpdateToOneWithWhereWithoutJornalesInput = {
    where?: Prisma.LoteWhereInput;
    data: Prisma.XOR<Prisma.LoteUpdateWithoutJornalesInput, Prisma.LoteUncheckedUpdateWithoutJornalesInput>;
};
export type LoteUpdateWithoutJornalesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutLotesNestedInput;
    cultivos?: Prisma.CultivoUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateWithoutJornalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivos?: Prisma.CultivoUncheckedUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteCreateWithoutBitacorasInput = {
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutLotesInput;
    cultivos?: Prisma.CultivoCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutLoteInput;
};
export type LoteUncheckedCreateWithoutBitacorasInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    fincaId: number;
    cultivos?: Prisma.CultivoUncheckedCreateNestedManyWithoutLoteInput;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutLoteInput;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutLoteInput;
};
export type LoteCreateOrConnectWithoutBitacorasInput = {
    where: Prisma.LoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.LoteCreateWithoutBitacorasInput, Prisma.LoteUncheckedCreateWithoutBitacorasInput>;
};
export type LoteUpsertWithoutBitacorasInput = {
    update: Prisma.XOR<Prisma.LoteUpdateWithoutBitacorasInput, Prisma.LoteUncheckedUpdateWithoutBitacorasInput>;
    create: Prisma.XOR<Prisma.LoteCreateWithoutBitacorasInput, Prisma.LoteUncheckedCreateWithoutBitacorasInput>;
    where?: Prisma.LoteWhereInput;
};
export type LoteUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: Prisma.LoteWhereInput;
    data: Prisma.XOR<Prisma.LoteUpdateWithoutBitacorasInput, Prisma.LoteUncheckedUpdateWithoutBitacorasInput>;
};
export type LoteUpdateWithoutBitacorasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutLotesNestedInput;
    cultivos?: Prisma.CultivoUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateWithoutBitacorasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivos?: Prisma.CultivoUncheckedUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteCreateManyFincaInput = {
    id?: number;
    nombre: string;
    area?: number | null;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LoteUpdateWithoutFincaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivos?: Prisma.CultivoUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivos?: Prisma.CultivoUncheckedUpdateManyWithoutLoteNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutLoteNestedInput;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutLoteNestedInput;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutLoteNestedInput;
};
export type LoteUncheckedUpdateManyWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type LoteCountOutputType
 */
export type LoteCountOutputType = {
    cultivos: number;
    bitacoras: number;
    jornales: number;
    gastos: number;
};
export type LoteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cultivos?: boolean | LoteCountOutputTypeCountCultivosArgs;
    bitacoras?: boolean | LoteCountOutputTypeCountBitacorasArgs;
    jornales?: boolean | LoteCountOutputTypeCountJornalesArgs;
    gastos?: boolean | LoteCountOutputTypeCountGastosArgs;
};
/**
 * LoteCountOutputType without action
 */
export type LoteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoteCountOutputType
     */
    select?: Prisma.LoteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * LoteCountOutputType without action
 */
export type LoteCountOutputTypeCountCultivosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CultivoWhereInput;
};
/**
 * LoteCountOutputType without action
 */
export type LoteCountOutputTypeCountBitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
};
/**
 * LoteCountOutputType without action
 */
export type LoteCountOutputTypeCountJornalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JornalWhereInput;
};
/**
 * LoteCountOutputType without action
 */
export type LoteCountOutputTypeCountGastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GastoWhereInput;
};
export type LoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fincaId?: boolean;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
    cultivos?: boolean | Prisma.Lote$cultivosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Lote$bitacorasArgs<ExtArgs>;
    jornales?: boolean | Prisma.Lote$jornalesArgs<ExtArgs>;
    gastos?: boolean | Prisma.Lote$gastosArgs<ExtArgs>;
    _count?: boolean | Prisma.LoteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lote"]>;
export type LoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fincaId?: boolean;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lote"]>;
export type LoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fincaId?: boolean;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lote"]>;
export type LoteSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    area?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    fincaId?: boolean;
};
export type LoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "area" | "descripcion" | "activo" | "createdAt" | "updatedAt" | "fincaId", ExtArgs["result"]["lote"]>;
export type LoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
    cultivos?: boolean | Prisma.Lote$cultivosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Lote$bitacorasArgs<ExtArgs>;
    jornales?: boolean | Prisma.Lote$jornalesArgs<ExtArgs>;
    gastos?: boolean | Prisma.Lote$gastosArgs<ExtArgs>;
    _count?: boolean | Prisma.LoteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
};
export type LoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
};
export type $LotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Lote";
    objects: {
        finca: Prisma.$FincaPayload<ExtArgs>;
        cultivos: Prisma.$CultivoPayload<ExtArgs>[];
        bitacoras: Prisma.$BitacoraPayload<ExtArgs>[];
        jornales: Prisma.$JornalPayload<ExtArgs>[];
        gastos: Prisma.$GastoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        area: number | null;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        fincaId: number;
    }, ExtArgs["result"]["lote"]>;
    composites: {};
};
export type LoteGetPayload<S extends boolean | null | undefined | LoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LotePayload, S>;
export type LoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LoteCountAggregateInputType | true;
};
export interface LoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Lote'];
        meta: {
            name: 'Lote';
        };
    };
    /**
     * Find zero or one Lote that matches the filter.
     * @param {LoteFindUniqueArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoteFindUniqueArgs>(args: Prisma.SelectSubset<T, LoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoteFindUniqueOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoteFindFirstArgs>(args?: Prisma.SelectSubset<T, LoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindFirstOrThrowArgs} args - Arguments to find a Lote
     * @example
     * // Get one Lote
     * const lote = await prisma.lote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lotes
     * const lotes = await prisma.lote.findMany()
     *
     * // Get first 10 Lotes
     * const lotes = await prisma.lote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const loteWithIdOnly = await prisma.lote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LoteFindManyArgs>(args?: Prisma.SelectSubset<T, LoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lote.
     * @param {LoteCreateArgs} args - Arguments to create a Lote.
     * @example
     * // Create one Lote
     * const Lote = await prisma.lote.create({
     *   data: {
     *     // ... data to create a Lote
     *   }
     * })
     *
     */
    create<T extends LoteCreateArgs>(args: Prisma.SelectSubset<T, LoteCreateArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lotes.
     * @param {LoteCreateManyArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LoteCreateManyArgs>(args?: Prisma.SelectSubset<T, LoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Lotes and returns the data saved in the database.
     * @param {LoteCreateManyAndReturnArgs} args - Arguments to create many Lotes.
     * @example
     * // Create many Lotes
     * const lote = await prisma.lote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Lote.
     * @param {LoteDeleteArgs} args - Arguments to delete one Lote.
     * @example
     * // Delete one Lote
     * const Lote = await prisma.lote.delete({
     *   where: {
     *     // ... filter to delete one Lote
     *   }
     * })
     *
     */
    delete<T extends LoteDeleteArgs>(args: Prisma.SelectSubset<T, LoteDeleteArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lote.
     * @param {LoteUpdateArgs} args - Arguments to update one Lote.
     * @example
     * // Update one Lote
     * const lote = await prisma.lote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LoteUpdateArgs>(args: Prisma.SelectSubset<T, LoteUpdateArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lotes.
     * @param {LoteDeleteManyArgs} args - Arguments to filter Lotes to delete.
     * @example
     * // Delete a few Lotes
     * const { count } = await prisma.lote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, LoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LoteUpdateManyArgs>(args: Prisma.SelectSubset<T, LoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lotes and returns the data updated in the database.
     * @param {LoteUpdateManyAndReturnArgs} args - Arguments to update many Lotes.
     * @example
     * // Update many Lotes
     * const lote = await prisma.lote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Lotes and only return the `id`
     * const loteWithIdOnly = await prisma.lote.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Lote.
     * @param {LoteUpsertArgs} args - Arguments to update or create a Lote.
     * @example
     * // Update or create a Lote
     * const lote = await prisma.lote.upsert({
     *   create: {
     *     // ... data to create a Lote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lote we want to update
     *   }
     * })
     */
    upsert<T extends LoteUpsertArgs>(args: Prisma.SelectSubset<T, LoteUpsertArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteCountArgs} args - Arguments to filter Lotes to count.
     * @example
     * // Count the number of Lotes
     * const count = await prisma.lote.count({
     *   where: {
     *     // ... the filter for the Lotes we want to count
     *   }
     * })
    **/
    count<T extends LoteCountArgs>(args?: Prisma.Subset<T, LoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoteAggregateArgs>(args: Prisma.Subset<T, LoteAggregateArgs>): Prisma.PrismaPromise<GetLoteAggregateType<T>>;
    /**
     * Group by Lote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends LoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LoteGroupByArgs['orderBy'];
    } : {
        orderBy?: LoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Lote model
     */
    readonly fields: LoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Lote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__LoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    finca<T extends Prisma.FincaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FincaDefaultArgs<ExtArgs>>): Prisma.Prisma__FincaClient<runtime.Types.Result.GetResult<Prisma.$FincaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cultivos<T extends Prisma.Lote$cultivosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lote$cultivosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bitacoras<T extends Prisma.Lote$bitacorasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lote$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    jornales<T extends Prisma.Lote$jornalesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lote$jornalesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gastos<T extends Prisma.Lote$gastosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Lote$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Lote model
 */
export interface LoteFieldRefs {
    readonly id: Prisma.FieldRef<"Lote", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Lote", 'String'>;
    readonly area: Prisma.FieldRef<"Lote", 'Float'>;
    readonly descripcion: Prisma.FieldRef<"Lote", 'String'>;
    readonly activo: Prisma.FieldRef<"Lote", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Lote", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Lote", 'DateTime'>;
    readonly fincaId: Prisma.FieldRef<"Lote", 'Int'>;
}
/**
 * Lote findUnique
 */
export type LoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lote to fetch.
     */
    where: Prisma.LoteWhereUniqueInput;
};
/**
 * Lote findUniqueOrThrow
 */
export type LoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lote to fetch.
     */
    where: Prisma.LoteWhereUniqueInput;
};
/**
 * Lote findFirst
 */
export type LoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lote to fetch.
     */
    where?: Prisma.LoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lotes to fetch.
     */
    orderBy?: Prisma.LoteOrderByWithRelationInput | Prisma.LoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lotes.
     */
    cursor?: Prisma.LoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lotes.
     */
    distinct?: Prisma.LoteScalarFieldEnum | Prisma.LoteScalarFieldEnum[];
};
/**
 * Lote findFirstOrThrow
 */
export type LoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lote to fetch.
     */
    where?: Prisma.LoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lotes to fetch.
     */
    orderBy?: Prisma.LoteOrderByWithRelationInput | Prisma.LoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Lotes.
     */
    cursor?: Prisma.LoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lotes.
     */
    distinct?: Prisma.LoteScalarFieldEnum | Prisma.LoteScalarFieldEnum[];
};
/**
 * Lote findMany
 */
export type LoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Lotes to fetch.
     */
    where?: Prisma.LoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Lotes to fetch.
     */
    orderBy?: Prisma.LoteOrderByWithRelationInput | Prisma.LoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Lotes.
     */
    cursor?: Prisma.LoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Lotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Lotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Lotes.
     */
    distinct?: Prisma.LoteScalarFieldEnum | Prisma.LoteScalarFieldEnum[];
};
/**
 * Lote create
 */
export type LoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Lote.
     */
    data: Prisma.XOR<Prisma.LoteCreateInput, Prisma.LoteUncheckedCreateInput>;
};
/**
 * Lote createMany
 */
export type LoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lotes.
     */
    data: Prisma.LoteCreateManyInput | Prisma.LoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Lote createManyAndReturn
 */
export type LoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: Prisma.LoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lote
     */
    omit?: Prisma.LoteOmit<ExtArgs> | null;
    /**
     * The data used to create many Lotes.
     */
    data: Prisma.LoteCreateManyInput | Prisma.LoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Lote update
 */
export type LoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Lote.
     */
    data: Prisma.XOR<Prisma.LoteUpdateInput, Prisma.LoteUncheckedUpdateInput>;
    /**
     * Choose, which Lote to update.
     */
    where: Prisma.LoteWhereUniqueInput;
};
/**
 * Lote updateMany
 */
export type LoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Lotes.
     */
    data: Prisma.XOR<Prisma.LoteUpdateManyMutationInput, Prisma.LoteUncheckedUpdateManyInput>;
    /**
     * Filter which Lotes to update
     */
    where?: Prisma.LoteWhereInput;
    /**
     * Limit how many Lotes to update.
     */
    limit?: number;
};
/**
 * Lote updateManyAndReturn
 */
export type LoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lote
     */
    select?: Prisma.LoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Lote
     */
    omit?: Prisma.LoteOmit<ExtArgs> | null;
    /**
     * The data used to update Lotes.
     */
    data: Prisma.XOR<Prisma.LoteUpdateManyMutationInput, Prisma.LoteUncheckedUpdateManyInput>;
    /**
     * Filter which Lotes to update
     */
    where?: Prisma.LoteWhereInput;
    /**
     * Limit how many Lotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Lote upsert
 */
export type LoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Lote to update in case it exists.
     */
    where: Prisma.LoteWhereUniqueInput;
    /**
     * In case the Lote found by the `where` argument doesn't exist, create a new Lote with this data.
     */
    create: Prisma.XOR<Prisma.LoteCreateInput, Prisma.LoteUncheckedCreateInput>;
    /**
     * In case the Lote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.LoteUpdateInput, Prisma.LoteUncheckedUpdateInput>;
};
/**
 * Lote delete
 */
export type LoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Lote to delete.
     */
    where: Prisma.LoteWhereUniqueInput;
};
/**
 * Lote deleteMany
 */
export type LoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Lotes to delete
     */
    where?: Prisma.LoteWhereInput;
    /**
     * Limit how many Lotes to delete.
     */
    limit?: number;
};
/**
 * Lote.cultivos
 */
export type Lote$cultivosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.CultivoOrderByWithRelationInput | Prisma.CultivoOrderByWithRelationInput[];
    cursor?: Prisma.CultivoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CultivoScalarFieldEnum | Prisma.CultivoScalarFieldEnum[];
};
/**
 * Lote.bitacoras
 */
export type Lote$bitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Lote.jornales
 */
export type Lote$jornalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornal
     */
    select?: Prisma.JornalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Jornal
     */
    omit?: Prisma.JornalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JornalInclude<ExtArgs> | null;
    where?: Prisma.JornalWhereInput;
    orderBy?: Prisma.JornalOrderByWithRelationInput | Prisma.JornalOrderByWithRelationInput[];
    cursor?: Prisma.JornalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.JornalScalarFieldEnum | Prisma.JornalScalarFieldEnum[];
};
/**
 * Lote.gastos
 */
export type Lote$gastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Lote without action
 */
export type LoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Lote.d.ts.map