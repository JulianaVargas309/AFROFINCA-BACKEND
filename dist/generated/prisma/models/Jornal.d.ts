import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Jornal
 *
 */
export type JornalModel = runtime.Types.Result.DefaultSelection<Prisma.$JornalPayload>;
export type AggregateJornal = {
    _count: JornalCountAggregateOutputType | null;
    _avg: JornalAvgAggregateOutputType | null;
    _sum: JornalSumAggregateOutputType | null;
    _min: JornalMinAggregateOutputType | null;
    _max: JornalMaxAggregateOutputType | null;
};
export type JornalAvgAggregateOutputType = {
    id: number | null;
    horas: number | null;
    montoPagado: number | null;
    trabajadorId: number | null;
    fincaId: number | null;
};
export type JornalSumAggregateOutputType = {
    id: number | null;
    horas: number | null;
    montoPagado: number | null;
    trabajadorId: number | null;
    fincaId: number | null;
};
export type JornalMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    createdAt: Date | null;
    trabajadorId: number | null;
    fincaId: number | null;
};
export type JornalMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    createdAt: Date | null;
    trabajadorId: number | null;
    fincaId: number | null;
};
export type JornalCountAggregateOutputType = {
    id: number;
    fecha: number;
    horas: number;
    tarea: number;
    montoPagado: number;
    createdAt: number;
    trabajadorId: number;
    fincaId: number;
    _all: number;
};
export type JornalAvgAggregateInputType = {
    id?: true;
    horas?: true;
    montoPagado?: true;
    trabajadorId?: true;
    fincaId?: true;
};
export type JornalSumAggregateInputType = {
    id?: true;
    horas?: true;
    montoPagado?: true;
    trabajadorId?: true;
    fincaId?: true;
};
export type JornalMinAggregateInputType = {
    id?: true;
    fecha?: true;
    horas?: true;
    tarea?: true;
    montoPagado?: true;
    createdAt?: true;
    trabajadorId?: true;
    fincaId?: true;
};
export type JornalMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    horas?: true;
    tarea?: true;
    montoPagado?: true;
    createdAt?: true;
    trabajadorId?: true;
    fincaId?: true;
};
export type JornalCountAggregateInputType = {
    id?: true;
    fecha?: true;
    horas?: true;
    tarea?: true;
    montoPagado?: true;
    createdAt?: true;
    trabajadorId?: true;
    fincaId?: true;
    _all?: true;
};
export type JornalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jornal to aggregate.
     */
    where?: Prisma.JornalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jornals to fetch.
     */
    orderBy?: Prisma.JornalOrderByWithRelationInput | Prisma.JornalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.JornalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jornals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jornals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Jornals
    **/
    _count?: true | JornalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: JornalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: JornalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: JornalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: JornalMaxAggregateInputType;
};
export type GetJornalAggregateType<T extends JornalAggregateArgs> = {
    [P in keyof T & keyof AggregateJornal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateJornal[P]> : Prisma.GetScalarType<T[P], AggregateJornal[P]>;
};
export type JornalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JornalWhereInput;
    orderBy?: Prisma.JornalOrderByWithAggregationInput | Prisma.JornalOrderByWithAggregationInput[];
    by: Prisma.JornalScalarFieldEnum[] | Prisma.JornalScalarFieldEnum;
    having?: Prisma.JornalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: JornalCountAggregateInputType | true;
    _avg?: JornalAvgAggregateInputType;
    _sum?: JornalSumAggregateInputType;
    _min?: JornalMinAggregateInputType;
    _max?: JornalMaxAggregateInputType;
};
export type JornalGroupByOutputType = {
    id: number;
    fecha: Date;
    horas: number | null;
    tarea: string | null;
    montoPagado: number | null;
    createdAt: Date;
    trabajadorId: number;
    fincaId: number;
    _count: JornalCountAggregateOutputType | null;
    _avg: JornalAvgAggregateOutputType | null;
    _sum: JornalSumAggregateOutputType | null;
    _min: JornalMinAggregateOutputType | null;
    _max: JornalMaxAggregateOutputType | null;
};
export type GetJornalGroupByPayload<T extends JornalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<JornalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof JornalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], JornalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], JornalGroupByOutputType[P]>;
}>>;
export type JornalWhereInput = {
    AND?: Prisma.JornalWhereInput | Prisma.JornalWhereInput[];
    OR?: Prisma.JornalWhereInput[];
    NOT?: Prisma.JornalWhereInput | Prisma.JornalWhereInput[];
    id?: Prisma.IntFilter<"Jornal"> | number;
    fecha?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    horas?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    tarea?: Prisma.StringNullableFilter<"Jornal"> | string | null;
    montoPagado?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    trabajadorId?: Prisma.IntFilter<"Jornal"> | number;
    fincaId?: Prisma.IntFilter<"Jornal"> | number;
    trabajador?: Prisma.XOR<Prisma.TrabajadorScalarRelationFilter, Prisma.TrabajadorWhereInput>;
    finca?: Prisma.XOR<Prisma.FincaScalarRelationFilter, Prisma.FincaWhereInput>;
};
export type JornalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    horas?: Prisma.SortOrderInput | Prisma.SortOrder;
    tarea?: Prisma.SortOrderInput | Prisma.SortOrder;
    montoPagado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    trabajador?: Prisma.TrabajadorOrderByWithRelationInput;
    finca?: Prisma.FincaOrderByWithRelationInput;
};
export type JornalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.JornalWhereInput | Prisma.JornalWhereInput[];
    OR?: Prisma.JornalWhereInput[];
    NOT?: Prisma.JornalWhereInput | Prisma.JornalWhereInput[];
    fecha?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    horas?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    tarea?: Prisma.StringNullableFilter<"Jornal"> | string | null;
    montoPagado?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    trabajadorId?: Prisma.IntFilter<"Jornal"> | number;
    fincaId?: Prisma.IntFilter<"Jornal"> | number;
    trabajador?: Prisma.XOR<Prisma.TrabajadorScalarRelationFilter, Prisma.TrabajadorWhereInput>;
    finca?: Prisma.XOR<Prisma.FincaScalarRelationFilter, Prisma.FincaWhereInput>;
}, "id">;
export type JornalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    horas?: Prisma.SortOrderInput | Prisma.SortOrder;
    tarea?: Prisma.SortOrderInput | Prisma.SortOrder;
    montoPagado?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
    _count?: Prisma.JornalCountOrderByAggregateInput;
    _avg?: Prisma.JornalAvgOrderByAggregateInput;
    _max?: Prisma.JornalMaxOrderByAggregateInput;
    _min?: Prisma.JornalMinOrderByAggregateInput;
    _sum?: Prisma.JornalSumOrderByAggregateInput;
};
export type JornalScalarWhereWithAggregatesInput = {
    AND?: Prisma.JornalScalarWhereWithAggregatesInput | Prisma.JornalScalarWhereWithAggregatesInput[];
    OR?: Prisma.JornalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.JornalScalarWhereWithAggregatesInput | Prisma.JornalScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Jornal"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Jornal"> | Date | string;
    horas?: Prisma.FloatNullableWithAggregatesFilter<"Jornal"> | number | null;
    tarea?: Prisma.StringNullableWithAggregatesFilter<"Jornal"> | string | null;
    montoPagado?: Prisma.FloatNullableWithAggregatesFilter<"Jornal"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Jornal"> | Date | string;
    trabajadorId?: Prisma.IntWithAggregatesFilter<"Jornal"> | number;
    fincaId?: Prisma.IntWithAggregatesFilter<"Jornal"> | number;
};
export type JornalCreateInput = {
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajador: Prisma.TrabajadorCreateNestedOneWithoutJornalesInput;
    finca: Prisma.FincaCreateNestedOneWithoutJornalesInput;
};
export type JornalUncheckedCreateInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajadorId: number;
    fincaId: number;
};
export type JornalUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajador?: Prisma.TrabajadorUpdateOneRequiredWithoutJornalesNestedInput;
    finca?: Prisma.FincaUpdateOneRequiredWithoutJornalesNestedInput;
};
export type JornalUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalCreateManyInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajadorId: number;
    fincaId: number;
};
export type JornalUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type JornalUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajadorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalListRelationFilter = {
    every?: Prisma.JornalWhereInput;
    some?: Prisma.JornalWhereInput;
    none?: Prisma.JornalWhereInput;
};
export type JornalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type JornalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    horas?: Prisma.SortOrder;
    tarea?: Prisma.SortOrder;
    montoPagado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type JornalAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    horas?: Prisma.SortOrder;
    montoPagado?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type JornalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    horas?: Prisma.SortOrder;
    tarea?: Prisma.SortOrder;
    montoPagado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type JornalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    horas?: Prisma.SortOrder;
    tarea?: Prisma.SortOrder;
    montoPagado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type JornalSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    horas?: Prisma.SortOrder;
    montoPagado?: Prisma.SortOrder;
    trabajadorId?: Prisma.SortOrder;
    fincaId?: Prisma.SortOrder;
};
export type JornalCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput> | Prisma.JornalCreateWithoutFincaInput[] | Prisma.JornalUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutFincaInput | Prisma.JornalCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.JornalCreateManyFincaInputEnvelope;
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
};
export type JornalUncheckedCreateNestedManyWithoutFincaInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput> | Prisma.JornalCreateWithoutFincaInput[] | Prisma.JornalUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutFincaInput | Prisma.JornalCreateOrConnectWithoutFincaInput[];
    createMany?: Prisma.JornalCreateManyFincaInputEnvelope;
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
};
export type JornalUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput> | Prisma.JornalCreateWithoutFincaInput[] | Prisma.JornalUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutFincaInput | Prisma.JornalCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.JornalUpsertWithWhereUniqueWithoutFincaInput | Prisma.JornalUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.JornalCreateManyFincaInputEnvelope;
    set?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    disconnect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    delete?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    update?: Prisma.JornalUpdateWithWhereUniqueWithoutFincaInput | Prisma.JornalUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.JornalUpdateManyWithWhereWithoutFincaInput | Prisma.JornalUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
};
export type JornalUncheckedUpdateManyWithoutFincaNestedInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput> | Prisma.JornalCreateWithoutFincaInput[] | Prisma.JornalUncheckedCreateWithoutFincaInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutFincaInput | Prisma.JornalCreateOrConnectWithoutFincaInput[];
    upsert?: Prisma.JornalUpsertWithWhereUniqueWithoutFincaInput | Prisma.JornalUpsertWithWhereUniqueWithoutFincaInput[];
    createMany?: Prisma.JornalCreateManyFincaInputEnvelope;
    set?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    disconnect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    delete?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    update?: Prisma.JornalUpdateWithWhereUniqueWithoutFincaInput | Prisma.JornalUpdateWithWhereUniqueWithoutFincaInput[];
    updateMany?: Prisma.JornalUpdateManyWithWhereWithoutFincaInput | Prisma.JornalUpdateManyWithWhereWithoutFincaInput[];
    deleteMany?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
};
export type JornalCreateNestedManyWithoutTrabajadorInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput> | Prisma.JornalCreateWithoutTrabajadorInput[] | Prisma.JornalUncheckedCreateWithoutTrabajadorInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutTrabajadorInput | Prisma.JornalCreateOrConnectWithoutTrabajadorInput[];
    createMany?: Prisma.JornalCreateManyTrabajadorInputEnvelope;
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
};
export type JornalUncheckedCreateNestedManyWithoutTrabajadorInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput> | Prisma.JornalCreateWithoutTrabajadorInput[] | Prisma.JornalUncheckedCreateWithoutTrabajadorInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutTrabajadorInput | Prisma.JornalCreateOrConnectWithoutTrabajadorInput[];
    createMany?: Prisma.JornalCreateManyTrabajadorInputEnvelope;
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
};
export type JornalUpdateManyWithoutTrabajadorNestedInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput> | Prisma.JornalCreateWithoutTrabajadorInput[] | Prisma.JornalUncheckedCreateWithoutTrabajadorInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutTrabajadorInput | Prisma.JornalCreateOrConnectWithoutTrabajadorInput[];
    upsert?: Prisma.JornalUpsertWithWhereUniqueWithoutTrabajadorInput | Prisma.JornalUpsertWithWhereUniqueWithoutTrabajadorInput[];
    createMany?: Prisma.JornalCreateManyTrabajadorInputEnvelope;
    set?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    disconnect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    delete?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    update?: Prisma.JornalUpdateWithWhereUniqueWithoutTrabajadorInput | Prisma.JornalUpdateWithWhereUniqueWithoutTrabajadorInput[];
    updateMany?: Prisma.JornalUpdateManyWithWhereWithoutTrabajadorInput | Prisma.JornalUpdateManyWithWhereWithoutTrabajadorInput[];
    deleteMany?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
};
export type JornalUncheckedUpdateManyWithoutTrabajadorNestedInput = {
    create?: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput> | Prisma.JornalCreateWithoutTrabajadorInput[] | Prisma.JornalUncheckedCreateWithoutTrabajadorInput[];
    connectOrCreate?: Prisma.JornalCreateOrConnectWithoutTrabajadorInput | Prisma.JornalCreateOrConnectWithoutTrabajadorInput[];
    upsert?: Prisma.JornalUpsertWithWhereUniqueWithoutTrabajadorInput | Prisma.JornalUpsertWithWhereUniqueWithoutTrabajadorInput[];
    createMany?: Prisma.JornalCreateManyTrabajadorInputEnvelope;
    set?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    disconnect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    delete?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    connect?: Prisma.JornalWhereUniqueInput | Prisma.JornalWhereUniqueInput[];
    update?: Prisma.JornalUpdateWithWhereUniqueWithoutTrabajadorInput | Prisma.JornalUpdateWithWhereUniqueWithoutTrabajadorInput[];
    updateMany?: Prisma.JornalUpdateManyWithWhereWithoutTrabajadorInput | Prisma.JornalUpdateManyWithWhereWithoutTrabajadorInput[];
    deleteMany?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
};
export type JornalCreateWithoutFincaInput = {
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajador: Prisma.TrabajadorCreateNestedOneWithoutJornalesInput;
};
export type JornalUncheckedCreateWithoutFincaInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajadorId: number;
};
export type JornalCreateOrConnectWithoutFincaInput = {
    where: Prisma.JornalWhereUniqueInput;
    create: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput>;
};
export type JornalCreateManyFincaInputEnvelope = {
    data: Prisma.JornalCreateManyFincaInput | Prisma.JornalCreateManyFincaInput[];
    skipDuplicates?: boolean;
};
export type JornalUpsertWithWhereUniqueWithoutFincaInput = {
    where: Prisma.JornalWhereUniqueInput;
    update: Prisma.XOR<Prisma.JornalUpdateWithoutFincaInput, Prisma.JornalUncheckedUpdateWithoutFincaInput>;
    create: Prisma.XOR<Prisma.JornalCreateWithoutFincaInput, Prisma.JornalUncheckedCreateWithoutFincaInput>;
};
export type JornalUpdateWithWhereUniqueWithoutFincaInput = {
    where: Prisma.JornalWhereUniqueInput;
    data: Prisma.XOR<Prisma.JornalUpdateWithoutFincaInput, Prisma.JornalUncheckedUpdateWithoutFincaInput>;
};
export type JornalUpdateManyWithWhereWithoutFincaInput = {
    where: Prisma.JornalScalarWhereInput;
    data: Prisma.XOR<Prisma.JornalUpdateManyMutationInput, Prisma.JornalUncheckedUpdateManyWithoutFincaInput>;
};
export type JornalScalarWhereInput = {
    AND?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
    OR?: Prisma.JornalScalarWhereInput[];
    NOT?: Prisma.JornalScalarWhereInput | Prisma.JornalScalarWhereInput[];
    id?: Prisma.IntFilter<"Jornal"> | number;
    fecha?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    horas?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    tarea?: Prisma.StringNullableFilter<"Jornal"> | string | null;
    montoPagado?: Prisma.FloatNullableFilter<"Jornal"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Jornal"> | Date | string;
    trabajadorId?: Prisma.IntFilter<"Jornal"> | number;
    fincaId?: Prisma.IntFilter<"Jornal"> | number;
};
export type JornalCreateWithoutTrabajadorInput = {
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    finca: Prisma.FincaCreateNestedOneWithoutJornalesInput;
};
export type JornalUncheckedCreateWithoutTrabajadorInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    fincaId: number;
};
export type JornalCreateOrConnectWithoutTrabajadorInput = {
    where: Prisma.JornalWhereUniqueInput;
    create: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput>;
};
export type JornalCreateManyTrabajadorInputEnvelope = {
    data: Prisma.JornalCreateManyTrabajadorInput | Prisma.JornalCreateManyTrabajadorInput[];
    skipDuplicates?: boolean;
};
export type JornalUpsertWithWhereUniqueWithoutTrabajadorInput = {
    where: Prisma.JornalWhereUniqueInput;
    update: Prisma.XOR<Prisma.JornalUpdateWithoutTrabajadorInput, Prisma.JornalUncheckedUpdateWithoutTrabajadorInput>;
    create: Prisma.XOR<Prisma.JornalCreateWithoutTrabajadorInput, Prisma.JornalUncheckedCreateWithoutTrabajadorInput>;
};
export type JornalUpdateWithWhereUniqueWithoutTrabajadorInput = {
    where: Prisma.JornalWhereUniqueInput;
    data: Prisma.XOR<Prisma.JornalUpdateWithoutTrabajadorInput, Prisma.JornalUncheckedUpdateWithoutTrabajadorInput>;
};
export type JornalUpdateManyWithWhereWithoutTrabajadorInput = {
    where: Prisma.JornalScalarWhereInput;
    data: Prisma.XOR<Prisma.JornalUpdateManyMutationInput, Prisma.JornalUncheckedUpdateManyWithoutTrabajadorInput>;
};
export type JornalCreateManyFincaInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    trabajadorId: number;
};
export type JornalUpdateWithoutFincaInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajador?: Prisma.TrabajadorUpdateOneRequiredWithoutJornalesNestedInput;
};
export type JornalUncheckedUpdateWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajadorId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalUncheckedUpdateManyWithoutFincaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trabajadorId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalCreateManyTrabajadorInput = {
    id?: number;
    fecha: Date | string;
    horas?: number | null;
    tarea?: string | null;
    montoPagado?: number | null;
    createdAt?: Date | string;
    fincaId: number;
};
export type JornalUpdateWithoutTrabajadorInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finca?: Prisma.FincaUpdateOneRequiredWithoutJornalesNestedInput;
};
export type JornalUncheckedUpdateWithoutTrabajadorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalUncheckedUpdateManyWithoutTrabajadorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horas?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    tarea?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    montoPagado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fincaId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type JornalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    horas?: boolean;
    tarea?: boolean;
    montoPagado?: boolean;
    createdAt?: boolean;
    trabajadorId?: boolean;
    fincaId?: boolean;
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jornal"]>;
export type JornalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    horas?: boolean;
    tarea?: boolean;
    montoPagado?: boolean;
    createdAt?: boolean;
    trabajadorId?: boolean;
    fincaId?: boolean;
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jornal"]>;
export type JornalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    horas?: boolean;
    tarea?: boolean;
    montoPagado?: boolean;
    createdAt?: boolean;
    trabajadorId?: boolean;
    fincaId?: boolean;
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["jornal"]>;
export type JornalSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    horas?: boolean;
    tarea?: boolean;
    montoPagado?: boolean;
    createdAt?: boolean;
    trabajadorId?: boolean;
    fincaId?: boolean;
};
export type JornalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "horas" | "tarea" | "montoPagado" | "createdAt" | "trabajadorId" | "fincaId", ExtArgs["result"]["jornal"]>;
export type JornalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
};
export type JornalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
};
export type JornalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trabajador?: boolean | Prisma.TrabajadorDefaultArgs<ExtArgs>;
    finca?: boolean | Prisma.FincaDefaultArgs<ExtArgs>;
};
export type $JornalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Jornal";
    objects: {
        trabajador: Prisma.$TrabajadorPayload<ExtArgs>;
        finca: Prisma.$FincaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date;
        horas: number | null;
        tarea: string | null;
        montoPagado: number | null;
        createdAt: Date;
        trabajadorId: number;
        fincaId: number;
    }, ExtArgs["result"]["jornal"]>;
    composites: {};
};
export type JornalGetPayload<S extends boolean | null | undefined | JornalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$JornalPayload, S>;
export type JornalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<JornalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: JornalCountAggregateInputType | true;
};
export interface JornalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Jornal'];
        meta: {
            name: 'Jornal';
        };
    };
    /**
     * Find zero or one Jornal that matches the filter.
     * @param {JornalFindUniqueArgs} args - Arguments to find a Jornal
     * @example
     * // Get one Jornal
     * const jornal = await prisma.jornal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JornalFindUniqueArgs>(args: Prisma.SelectSubset<T, JornalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Jornal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JornalFindUniqueOrThrowArgs} args - Arguments to find a Jornal
     * @example
     * // Get one Jornal
     * const jornal = await prisma.jornal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JornalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, JornalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jornal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalFindFirstArgs} args - Arguments to find a Jornal
     * @example
     * // Get one Jornal
     * const jornal = await prisma.jornal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JornalFindFirstArgs>(args?: Prisma.SelectSubset<T, JornalFindFirstArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Jornal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalFindFirstOrThrowArgs} args - Arguments to find a Jornal
     * @example
     * // Get one Jornal
     * const jornal = await prisma.jornal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JornalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, JornalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Jornals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jornals
     * const jornals = await prisma.jornal.findMany()
     *
     * // Get first 10 Jornals
     * const jornals = await prisma.jornal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const jornalWithIdOnly = await prisma.jornal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends JornalFindManyArgs>(args?: Prisma.SelectSubset<T, JornalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Jornal.
     * @param {JornalCreateArgs} args - Arguments to create a Jornal.
     * @example
     * // Create one Jornal
     * const Jornal = await prisma.jornal.create({
     *   data: {
     *     // ... data to create a Jornal
     *   }
     * })
     *
     */
    create<T extends JornalCreateArgs>(args: Prisma.SelectSubset<T, JornalCreateArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Jornals.
     * @param {JornalCreateManyArgs} args - Arguments to create many Jornals.
     * @example
     * // Create many Jornals
     * const jornal = await prisma.jornal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends JornalCreateManyArgs>(args?: Prisma.SelectSubset<T, JornalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Jornals and returns the data saved in the database.
     * @param {JornalCreateManyAndReturnArgs} args - Arguments to create many Jornals.
     * @example
     * // Create many Jornals
     * const jornal = await prisma.jornal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Jornals and only return the `id`
     * const jornalWithIdOnly = await prisma.jornal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends JornalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, JornalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Jornal.
     * @param {JornalDeleteArgs} args - Arguments to delete one Jornal.
     * @example
     * // Delete one Jornal
     * const Jornal = await prisma.jornal.delete({
     *   where: {
     *     // ... filter to delete one Jornal
     *   }
     * })
     *
     */
    delete<T extends JornalDeleteArgs>(args: Prisma.SelectSubset<T, JornalDeleteArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Jornal.
     * @param {JornalUpdateArgs} args - Arguments to update one Jornal.
     * @example
     * // Update one Jornal
     * const jornal = await prisma.jornal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends JornalUpdateArgs>(args: Prisma.SelectSubset<T, JornalUpdateArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Jornals.
     * @param {JornalDeleteManyArgs} args - Arguments to filter Jornals to delete.
     * @example
     * // Delete a few Jornals
     * const { count } = await prisma.jornal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends JornalDeleteManyArgs>(args?: Prisma.SelectSubset<T, JornalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jornals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jornals
     * const jornal = await prisma.jornal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends JornalUpdateManyArgs>(args: Prisma.SelectSubset<T, JornalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Jornals and returns the data updated in the database.
     * @param {JornalUpdateManyAndReturnArgs} args - Arguments to update many Jornals.
     * @example
     * // Update many Jornals
     * const jornal = await prisma.jornal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Jornals and only return the `id`
     * const jornalWithIdOnly = await prisma.jornal.updateManyAndReturn({
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
    updateManyAndReturn<T extends JornalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, JornalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Jornal.
     * @param {JornalUpsertArgs} args - Arguments to update or create a Jornal.
     * @example
     * // Update or create a Jornal
     * const jornal = await prisma.jornal.upsert({
     *   create: {
     *     // ... data to create a Jornal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jornal we want to update
     *   }
     * })
     */
    upsert<T extends JornalUpsertArgs>(args: Prisma.SelectSubset<T, JornalUpsertArgs<ExtArgs>>): Prisma.Prisma__JornalClient<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Jornals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalCountArgs} args - Arguments to filter Jornals to count.
     * @example
     * // Count the number of Jornals
     * const count = await prisma.jornal.count({
     *   where: {
     *     // ... the filter for the Jornals we want to count
     *   }
     * })
    **/
    count<T extends JornalCountArgs>(args?: Prisma.Subset<T, JornalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], JornalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Jornal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JornalAggregateArgs>(args: Prisma.Subset<T, JornalAggregateArgs>): Prisma.PrismaPromise<GetJornalAggregateType<T>>;
    /**
     * Group by Jornal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JornalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends JornalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: JornalGroupByArgs['orderBy'];
    } : {
        orderBy?: JornalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, JornalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJornalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Jornal model
     */
    readonly fields: JornalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Jornal.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__JornalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trabajador<T extends Prisma.TrabajadorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TrabajadorDefaultArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    finca<T extends Prisma.FincaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FincaDefaultArgs<ExtArgs>>): Prisma.Prisma__FincaClient<runtime.Types.Result.GetResult<Prisma.$FincaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Jornal model
 */
export interface JornalFieldRefs {
    readonly id: Prisma.FieldRef<"Jornal", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Jornal", 'DateTime'>;
    readonly horas: Prisma.FieldRef<"Jornal", 'Float'>;
    readonly tarea: Prisma.FieldRef<"Jornal", 'String'>;
    readonly montoPagado: Prisma.FieldRef<"Jornal", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Jornal", 'DateTime'>;
    readonly trabajadorId: Prisma.FieldRef<"Jornal", 'Int'>;
    readonly fincaId: Prisma.FieldRef<"Jornal", 'Int'>;
}
/**
 * Jornal findUnique
 */
export type JornalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Jornal to fetch.
     */
    where: Prisma.JornalWhereUniqueInput;
};
/**
 * Jornal findUniqueOrThrow
 */
export type JornalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Jornal to fetch.
     */
    where: Prisma.JornalWhereUniqueInput;
};
/**
 * Jornal findFirst
 */
export type JornalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Jornal to fetch.
     */
    where?: Prisma.JornalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jornals to fetch.
     */
    orderBy?: Prisma.JornalOrderByWithRelationInput | Prisma.JornalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jornals.
     */
    cursor?: Prisma.JornalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jornals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jornals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jornals.
     */
    distinct?: Prisma.JornalScalarFieldEnum | Prisma.JornalScalarFieldEnum[];
};
/**
 * Jornal findFirstOrThrow
 */
export type JornalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Jornal to fetch.
     */
    where?: Prisma.JornalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jornals to fetch.
     */
    orderBy?: Prisma.JornalOrderByWithRelationInput | Prisma.JornalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Jornals.
     */
    cursor?: Prisma.JornalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jornals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jornals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jornals.
     */
    distinct?: Prisma.JornalScalarFieldEnum | Prisma.JornalScalarFieldEnum[];
};
/**
 * Jornal findMany
 */
export type JornalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Jornals to fetch.
     */
    where?: Prisma.JornalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Jornals to fetch.
     */
    orderBy?: Prisma.JornalOrderByWithRelationInput | Prisma.JornalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Jornals.
     */
    cursor?: Prisma.JornalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Jornals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Jornals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Jornals.
     */
    distinct?: Prisma.JornalScalarFieldEnum | Prisma.JornalScalarFieldEnum[];
};
/**
 * Jornal create
 */
export type JornalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Jornal.
     */
    data: Prisma.XOR<Prisma.JornalCreateInput, Prisma.JornalUncheckedCreateInput>;
};
/**
 * Jornal createMany
 */
export type JornalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jornals.
     */
    data: Prisma.JornalCreateManyInput | Prisma.JornalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Jornal createManyAndReturn
 */
export type JornalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornal
     */
    select?: Prisma.JornalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jornal
     */
    omit?: Prisma.JornalOmit<ExtArgs> | null;
    /**
     * The data used to create many Jornals.
     */
    data: Prisma.JornalCreateManyInput | Prisma.JornalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JornalIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Jornal update
 */
export type JornalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Jornal.
     */
    data: Prisma.XOR<Prisma.JornalUpdateInput, Prisma.JornalUncheckedUpdateInput>;
    /**
     * Choose, which Jornal to update.
     */
    where: Prisma.JornalWhereUniqueInput;
};
/**
 * Jornal updateMany
 */
export type JornalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Jornals.
     */
    data: Prisma.XOR<Prisma.JornalUpdateManyMutationInput, Prisma.JornalUncheckedUpdateManyInput>;
    /**
     * Filter which Jornals to update
     */
    where?: Prisma.JornalWhereInput;
    /**
     * Limit how many Jornals to update.
     */
    limit?: number;
};
/**
 * Jornal updateManyAndReturn
 */
export type JornalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jornal
     */
    select?: Prisma.JornalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Jornal
     */
    omit?: Prisma.JornalOmit<ExtArgs> | null;
    /**
     * The data used to update Jornals.
     */
    data: Prisma.XOR<Prisma.JornalUpdateManyMutationInput, Prisma.JornalUncheckedUpdateManyInput>;
    /**
     * Filter which Jornals to update
     */
    where?: Prisma.JornalWhereInput;
    /**
     * Limit how many Jornals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.JornalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Jornal upsert
 */
export type JornalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Jornal to update in case it exists.
     */
    where: Prisma.JornalWhereUniqueInput;
    /**
     * In case the Jornal found by the `where` argument doesn't exist, create a new Jornal with this data.
     */
    create: Prisma.XOR<Prisma.JornalCreateInput, Prisma.JornalUncheckedCreateInput>;
    /**
     * In case the Jornal was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.JornalUpdateInput, Prisma.JornalUncheckedUpdateInput>;
};
/**
 * Jornal delete
 */
export type JornalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Jornal to delete.
     */
    where: Prisma.JornalWhereUniqueInput;
};
/**
 * Jornal deleteMany
 */
export type JornalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Jornals to delete
     */
    where?: Prisma.JornalWhereInput;
    /**
     * Limit how many Jornals to delete.
     */
    limit?: number;
};
/**
 * Jornal without action
 */
export type JornalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Jornal.d.ts.map