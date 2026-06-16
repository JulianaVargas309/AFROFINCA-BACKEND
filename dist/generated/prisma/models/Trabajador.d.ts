import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Trabajador
 *
 */
export type TrabajadorModel = runtime.Types.Result.DefaultSelection<Prisma.$TrabajadorPayload>;
export type AggregateTrabajador = {
    _count: TrabajadorCountAggregateOutputType | null;
    _avg: TrabajadorAvgAggregateOutputType | null;
    _sum: TrabajadorSumAggregateOutputType | null;
    _min: TrabajadorMinAggregateOutputType | null;
    _max: TrabajadorMaxAggregateOutputType | null;
};
export type TrabajadorAvgAggregateOutputType = {
    id: number | null;
    salarioBase: number | null;
};
export type TrabajadorSumAggregateOutputType = {
    id: number | null;
    salarioBase: number | null;
};
export type TrabajadorMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    direccion: string | null;
    tipo: string | null;
    salarioBase: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrabajadorMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    direccion: string | null;
    tipo: string | null;
    salarioBase: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrabajadorCountAggregateOutputType = {
    id: number;
    nombre: number;
    telefono: number;
    direccion: number;
    tipo: number;
    salarioBase: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TrabajadorAvgAggregateInputType = {
    id?: true;
    salarioBase?: true;
};
export type TrabajadorSumAggregateInputType = {
    id?: true;
    salarioBase?: true;
};
export type TrabajadorMinAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    direccion?: true;
    tipo?: true;
    salarioBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrabajadorMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    direccion?: true;
    tipo?: true;
    salarioBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrabajadorCountAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    direccion?: true;
    tipo?: true;
    salarioBase?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrabajadorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Trabajador to aggregate.
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trabajadors to fetch.
     */
    orderBy?: Prisma.TrabajadorOrderByWithRelationInput | Prisma.TrabajadorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TrabajadorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trabajadors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trabajadors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Trabajadors
    **/
    _count?: true | TrabajadorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TrabajadorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TrabajadorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TrabajadorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TrabajadorMaxAggregateInputType;
};
export type GetTrabajadorAggregateType<T extends TrabajadorAggregateArgs> = {
    [P in keyof T & keyof AggregateTrabajador]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrabajador[P]> : Prisma.GetScalarType<T[P], AggregateTrabajador[P]>;
};
export type TrabajadorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrabajadorWhereInput;
    orderBy?: Prisma.TrabajadorOrderByWithAggregationInput | Prisma.TrabajadorOrderByWithAggregationInput[];
    by: Prisma.TrabajadorScalarFieldEnum[] | Prisma.TrabajadorScalarFieldEnum;
    having?: Prisma.TrabajadorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrabajadorCountAggregateInputType | true;
    _avg?: TrabajadorAvgAggregateInputType;
    _sum?: TrabajadorSumAggregateInputType;
    _min?: TrabajadorMinAggregateInputType;
    _max?: TrabajadorMaxAggregateInputType;
};
export type TrabajadorGroupByOutputType = {
    id: number;
    nombre: string;
    telefono: string | null;
    direccion: string | null;
    tipo: string;
    salarioBase: number | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TrabajadorCountAggregateOutputType | null;
    _avg: TrabajadorAvgAggregateOutputType | null;
    _sum: TrabajadorSumAggregateOutputType | null;
    _min: TrabajadorMinAggregateOutputType | null;
    _max: TrabajadorMaxAggregateOutputType | null;
};
export type GetTrabajadorGroupByPayload<T extends TrabajadorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrabajadorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrabajadorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrabajadorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrabajadorGroupByOutputType[P]>;
}>>;
export type TrabajadorWhereInput = {
    AND?: Prisma.TrabajadorWhereInput | Prisma.TrabajadorWhereInput[];
    OR?: Prisma.TrabajadorWhereInput[];
    NOT?: Prisma.TrabajadorWhereInput | Prisma.TrabajadorWhereInput[];
    id?: Prisma.IntFilter<"Trabajador"> | number;
    nombre?: Prisma.StringFilter<"Trabajador"> | string;
    telefono?: Prisma.StringNullableFilter<"Trabajador"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Trabajador"> | string | null;
    tipo?: Prisma.StringFilter<"Trabajador"> | string;
    salarioBase?: Prisma.FloatNullableFilter<"Trabajador"> | number | null;
    activo?: Prisma.BoolFilter<"Trabajador"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Trabajador"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trabajador"> | Date | string;
    jornales?: Prisma.JornalListRelationFilter;
};
export type TrabajadorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    jornales?: Prisma.JornalOrderByRelationAggregateInput;
};
export type TrabajadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TrabajadorWhereInput | Prisma.TrabajadorWhereInput[];
    OR?: Prisma.TrabajadorWhereInput[];
    NOT?: Prisma.TrabajadorWhereInput | Prisma.TrabajadorWhereInput[];
    nombre?: Prisma.StringFilter<"Trabajador"> | string;
    telefono?: Prisma.StringNullableFilter<"Trabajador"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Trabajador"> | string | null;
    tipo?: Prisma.StringFilter<"Trabajador"> | string;
    salarioBase?: Prisma.FloatNullableFilter<"Trabajador"> | number | null;
    activo?: Prisma.BoolFilter<"Trabajador"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Trabajador"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Trabajador"> | Date | string;
    jornales?: Prisma.JornalListRelationFilter;
}, "id">;
export type TrabajadorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TrabajadorCountOrderByAggregateInput;
    _avg?: Prisma.TrabajadorAvgOrderByAggregateInput;
    _max?: Prisma.TrabajadorMaxOrderByAggregateInput;
    _min?: Prisma.TrabajadorMinOrderByAggregateInput;
    _sum?: Prisma.TrabajadorSumOrderByAggregateInput;
};
export type TrabajadorScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrabajadorScalarWhereWithAggregatesInput | Prisma.TrabajadorScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrabajadorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrabajadorScalarWhereWithAggregatesInput | Prisma.TrabajadorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Trabajador"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Trabajador"> | string;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Trabajador"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Trabajador"> | string | null;
    tipo?: Prisma.StringWithAggregatesFilter<"Trabajador"> | string;
    salarioBase?: Prisma.FloatNullableWithAggregatesFilter<"Trabajador"> | number | null;
    activo?: Prisma.BoolWithAggregatesFilter<"Trabajador"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Trabajador"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Trabajador"> | Date | string;
};
export type TrabajadorCreateInput = {
    nombre: string;
    telefono?: string | null;
    direccion?: string | null;
    tipo?: string;
    salarioBase?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornales?: Prisma.JornalCreateNestedManyWithoutTrabajadorInput;
};
export type TrabajadorUncheckedCreateInput = {
    id?: number;
    nombre: string;
    telefono?: string | null;
    direccion?: string | null;
    tipo?: string;
    salarioBase?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    jornales?: Prisma.JornalUncheckedCreateNestedManyWithoutTrabajadorInput;
};
export type TrabajadorUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornales?: Prisma.JornalUpdateManyWithoutTrabajadorNestedInput;
};
export type TrabajadorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    jornales?: Prisma.JornalUncheckedUpdateManyWithoutTrabajadorNestedInput;
};
export type TrabajadorCreateManyInput = {
    id?: number;
    nombre: string;
    telefono?: string | null;
    direccion?: string | null;
    tipo?: string;
    salarioBase?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrabajadorUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrabajadorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrabajadorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrabajadorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrder;
};
export type TrabajadorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrabajadorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrabajadorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    salarioBase?: Prisma.SortOrder;
};
export type TrabajadorScalarRelationFilter = {
    is?: Prisma.TrabajadorWhereInput;
    isNot?: Prisma.TrabajadorWhereInput;
};
export type TrabajadorCreateNestedOneWithoutJornalesInput = {
    create?: Prisma.XOR<Prisma.TrabajadorCreateWithoutJornalesInput, Prisma.TrabajadorUncheckedCreateWithoutJornalesInput>;
    connectOrCreate?: Prisma.TrabajadorCreateOrConnectWithoutJornalesInput;
    connect?: Prisma.TrabajadorWhereUniqueInput;
};
export type TrabajadorUpdateOneRequiredWithoutJornalesNestedInput = {
    create?: Prisma.XOR<Prisma.TrabajadorCreateWithoutJornalesInput, Prisma.TrabajadorUncheckedCreateWithoutJornalesInput>;
    connectOrCreate?: Prisma.TrabajadorCreateOrConnectWithoutJornalesInput;
    upsert?: Prisma.TrabajadorUpsertWithoutJornalesInput;
    connect?: Prisma.TrabajadorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrabajadorUpdateToOneWithWhereWithoutJornalesInput, Prisma.TrabajadorUpdateWithoutJornalesInput>, Prisma.TrabajadorUncheckedUpdateWithoutJornalesInput>;
};
export type TrabajadorCreateWithoutJornalesInput = {
    nombre: string;
    telefono?: string | null;
    direccion?: string | null;
    tipo?: string;
    salarioBase?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrabajadorUncheckedCreateWithoutJornalesInput = {
    id?: number;
    nombre: string;
    telefono?: string | null;
    direccion?: string | null;
    tipo?: string;
    salarioBase?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TrabajadorCreateOrConnectWithoutJornalesInput = {
    where: Prisma.TrabajadorWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrabajadorCreateWithoutJornalesInput, Prisma.TrabajadorUncheckedCreateWithoutJornalesInput>;
};
export type TrabajadorUpsertWithoutJornalesInput = {
    update: Prisma.XOR<Prisma.TrabajadorUpdateWithoutJornalesInput, Prisma.TrabajadorUncheckedUpdateWithoutJornalesInput>;
    create: Prisma.XOR<Prisma.TrabajadorCreateWithoutJornalesInput, Prisma.TrabajadorUncheckedCreateWithoutJornalesInput>;
    where?: Prisma.TrabajadorWhereInput;
};
export type TrabajadorUpdateToOneWithWhereWithoutJornalesInput = {
    where?: Prisma.TrabajadorWhereInput;
    data: Prisma.XOR<Prisma.TrabajadorUpdateWithoutJornalesInput, Prisma.TrabajadorUncheckedUpdateWithoutJornalesInput>;
};
export type TrabajadorUpdateWithoutJornalesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrabajadorUncheckedUpdateWithoutJornalesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    salarioBase?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type TrabajadorCountOutputType
 */
export type TrabajadorCountOutputType = {
    jornales: number;
};
export type TrabajadorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jornales?: boolean | TrabajadorCountOutputTypeCountJornalesArgs;
};
/**
 * TrabajadorCountOutputType without action
 */
export type TrabajadorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrabajadorCountOutputType
     */
    select?: Prisma.TrabajadorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TrabajadorCountOutputType without action
 */
export type TrabajadorCountOutputTypeCountJornalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.JornalWhereInput;
};
export type TrabajadorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    tipo?: boolean;
    salarioBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    jornales?: boolean | Prisma.Trabajador$jornalesArgs<ExtArgs>;
    _count?: boolean | Prisma.TrabajadorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trabajador"]>;
export type TrabajadorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    tipo?: boolean;
    salarioBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["trabajador"]>;
export type TrabajadorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    tipo?: boolean;
    salarioBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["trabajador"]>;
export type TrabajadorSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    tipo?: boolean;
    salarioBase?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TrabajadorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "telefono" | "direccion" | "tipo" | "salarioBase" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["trabajador"]>;
export type TrabajadorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    jornales?: boolean | Prisma.Trabajador$jornalesArgs<ExtArgs>;
    _count?: boolean | Prisma.TrabajadorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TrabajadorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TrabajadorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TrabajadorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Trabajador";
    objects: {
        jornales: Prisma.$JornalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        telefono: string | null;
        direccion: string | null;
        tipo: string;
        salarioBase: number | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["trabajador"]>;
    composites: {};
};
export type TrabajadorGetPayload<S extends boolean | null | undefined | TrabajadorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload, S>;
export type TrabajadorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrabajadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrabajadorCountAggregateInputType | true;
};
export interface TrabajadorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Trabajador'];
        meta: {
            name: 'Trabajador';
        };
    };
    /**
     * Find zero or one Trabajador that matches the filter.
     * @param {TrabajadorFindUniqueArgs} args - Arguments to find a Trabajador
     * @example
     * // Get one Trabajador
     * const trabajador = await prisma.trabajador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrabajadorFindUniqueArgs>(args: Prisma.SelectSubset<T, TrabajadorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Trabajador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrabajadorFindUniqueOrThrowArgs} args - Arguments to find a Trabajador
     * @example
     * // Get one Trabajador
     * const trabajador = await prisma.trabajador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrabajadorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrabajadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Trabajador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorFindFirstArgs} args - Arguments to find a Trabajador
     * @example
     * // Get one Trabajador
     * const trabajador = await prisma.trabajador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrabajadorFindFirstArgs>(args?: Prisma.SelectSubset<T, TrabajadorFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Trabajador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorFindFirstOrThrowArgs} args - Arguments to find a Trabajador
     * @example
     * // Get one Trabajador
     * const trabajador = await prisma.trabajador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrabajadorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrabajadorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Trabajadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trabajadors
     * const trabajadors = await prisma.trabajador.findMany()
     *
     * // Get first 10 Trabajadors
     * const trabajadors = await prisma.trabajador.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const trabajadorWithIdOnly = await prisma.trabajador.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TrabajadorFindManyArgs>(args?: Prisma.SelectSubset<T, TrabajadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Trabajador.
     * @param {TrabajadorCreateArgs} args - Arguments to create a Trabajador.
     * @example
     * // Create one Trabajador
     * const Trabajador = await prisma.trabajador.create({
     *   data: {
     *     // ... data to create a Trabajador
     *   }
     * })
     *
     */
    create<T extends TrabajadorCreateArgs>(args: Prisma.SelectSubset<T, TrabajadorCreateArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Trabajadors.
     * @param {TrabajadorCreateManyArgs} args - Arguments to create many Trabajadors.
     * @example
     * // Create many Trabajadors
     * const trabajador = await prisma.trabajador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TrabajadorCreateManyArgs>(args?: Prisma.SelectSubset<T, TrabajadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Trabajadors and returns the data saved in the database.
     * @param {TrabajadorCreateManyAndReturnArgs} args - Arguments to create many Trabajadors.
     * @example
     * // Create many Trabajadors
     * const trabajador = await prisma.trabajador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Trabajadors and only return the `id`
     * const trabajadorWithIdOnly = await prisma.trabajador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TrabajadorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrabajadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Trabajador.
     * @param {TrabajadorDeleteArgs} args - Arguments to delete one Trabajador.
     * @example
     * // Delete one Trabajador
     * const Trabajador = await prisma.trabajador.delete({
     *   where: {
     *     // ... filter to delete one Trabajador
     *   }
     * })
     *
     */
    delete<T extends TrabajadorDeleteArgs>(args: Prisma.SelectSubset<T, TrabajadorDeleteArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Trabajador.
     * @param {TrabajadorUpdateArgs} args - Arguments to update one Trabajador.
     * @example
     * // Update one Trabajador
     * const trabajador = await prisma.trabajador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TrabajadorUpdateArgs>(args: Prisma.SelectSubset<T, TrabajadorUpdateArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Trabajadors.
     * @param {TrabajadorDeleteManyArgs} args - Arguments to filter Trabajadors to delete.
     * @example
     * // Delete a few Trabajadors
     * const { count } = await prisma.trabajador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TrabajadorDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrabajadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Trabajadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trabajadors
     * const trabajador = await prisma.trabajador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TrabajadorUpdateManyArgs>(args: Prisma.SelectSubset<T, TrabajadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Trabajadors and returns the data updated in the database.
     * @param {TrabajadorUpdateManyAndReturnArgs} args - Arguments to update many Trabajadors.
     * @example
     * // Update many Trabajadors
     * const trabajador = await prisma.trabajador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Trabajadors and only return the `id`
     * const trabajadorWithIdOnly = await prisma.trabajador.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrabajadorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrabajadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Trabajador.
     * @param {TrabajadorUpsertArgs} args - Arguments to update or create a Trabajador.
     * @example
     * // Update or create a Trabajador
     * const trabajador = await prisma.trabajador.upsert({
     *   create: {
     *     // ... data to create a Trabajador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trabajador we want to update
     *   }
     * })
     */
    upsert<T extends TrabajadorUpsertArgs>(args: Prisma.SelectSubset<T, TrabajadorUpsertArgs<ExtArgs>>): Prisma.Prisma__TrabajadorClient<runtime.Types.Result.GetResult<Prisma.$TrabajadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Trabajadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorCountArgs} args - Arguments to filter Trabajadors to count.
     * @example
     * // Count the number of Trabajadors
     * const count = await prisma.trabajador.count({
     *   where: {
     *     // ... the filter for the Trabajadors we want to count
     *   }
     * })
    **/
    count<T extends TrabajadorCountArgs>(args?: Prisma.Subset<T, TrabajadorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrabajadorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Trabajador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrabajadorAggregateArgs>(args: Prisma.Subset<T, TrabajadorAggregateArgs>): Prisma.PrismaPromise<GetTrabajadorAggregateType<T>>;
    /**
     * Group by Trabajador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrabajadorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TrabajadorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrabajadorGroupByArgs['orderBy'];
    } : {
        orderBy?: TrabajadorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrabajadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrabajadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Trabajador model
     */
    readonly fields: TrabajadorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Trabajador.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TrabajadorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    jornales<T extends Prisma.Trabajador$jornalesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Trabajador$jornalesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$JornalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Trabajador model
 */
export interface TrabajadorFieldRefs {
    readonly id: Prisma.FieldRef<"Trabajador", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Trabajador", 'String'>;
    readonly telefono: Prisma.FieldRef<"Trabajador", 'String'>;
    readonly direccion: Prisma.FieldRef<"Trabajador", 'String'>;
    readonly tipo: Prisma.FieldRef<"Trabajador", 'String'>;
    readonly salarioBase: Prisma.FieldRef<"Trabajador", 'Float'>;
    readonly activo: Prisma.FieldRef<"Trabajador", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Trabajador", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Trabajador", 'DateTime'>;
}
/**
 * Trabajador findUnique
 */
export type TrabajadorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter, which Trabajador to fetch.
     */
    where: Prisma.TrabajadorWhereUniqueInput;
};
/**
 * Trabajador findUniqueOrThrow
 */
export type TrabajadorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter, which Trabajador to fetch.
     */
    where: Prisma.TrabajadorWhereUniqueInput;
};
/**
 * Trabajador findFirst
 */
export type TrabajadorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter, which Trabajador to fetch.
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trabajadors to fetch.
     */
    orderBy?: Prisma.TrabajadorOrderByWithRelationInput | Prisma.TrabajadorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trabajadors.
     */
    cursor?: Prisma.TrabajadorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trabajadors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trabajadors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trabajadors.
     */
    distinct?: Prisma.TrabajadorScalarFieldEnum | Prisma.TrabajadorScalarFieldEnum[];
};
/**
 * Trabajador findFirstOrThrow
 */
export type TrabajadorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter, which Trabajador to fetch.
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trabajadors to fetch.
     */
    orderBy?: Prisma.TrabajadorOrderByWithRelationInput | Prisma.TrabajadorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Trabajadors.
     */
    cursor?: Prisma.TrabajadorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trabajadors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trabajadors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trabajadors.
     */
    distinct?: Prisma.TrabajadorScalarFieldEnum | Prisma.TrabajadorScalarFieldEnum[];
};
/**
 * Trabajador findMany
 */
export type TrabajadorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter, which Trabajadors to fetch.
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Trabajadors to fetch.
     */
    orderBy?: Prisma.TrabajadorOrderByWithRelationInput | Prisma.TrabajadorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Trabajadors.
     */
    cursor?: Prisma.TrabajadorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Trabajadors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Trabajadors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Trabajadors.
     */
    distinct?: Prisma.TrabajadorScalarFieldEnum | Prisma.TrabajadorScalarFieldEnum[];
};
/**
 * Trabajador create
 */
export type TrabajadorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * The data needed to create a Trabajador.
     */
    data: Prisma.XOR<Prisma.TrabajadorCreateInput, Prisma.TrabajadorUncheckedCreateInput>;
};
/**
 * Trabajador createMany
 */
export type TrabajadorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trabajadors.
     */
    data: Prisma.TrabajadorCreateManyInput | Prisma.TrabajadorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Trabajador createManyAndReturn
 */
export type TrabajadorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * The data used to create many Trabajadors.
     */
    data: Prisma.TrabajadorCreateManyInput | Prisma.TrabajadorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Trabajador update
 */
export type TrabajadorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * The data needed to update a Trabajador.
     */
    data: Prisma.XOR<Prisma.TrabajadorUpdateInput, Prisma.TrabajadorUncheckedUpdateInput>;
    /**
     * Choose, which Trabajador to update.
     */
    where: Prisma.TrabajadorWhereUniqueInput;
};
/**
 * Trabajador updateMany
 */
export type TrabajadorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Trabajadors.
     */
    data: Prisma.XOR<Prisma.TrabajadorUpdateManyMutationInput, Prisma.TrabajadorUncheckedUpdateManyInput>;
    /**
     * Filter which Trabajadors to update
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * Limit how many Trabajadors to update.
     */
    limit?: number;
};
/**
 * Trabajador updateManyAndReturn
 */
export type TrabajadorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * The data used to update Trabajadors.
     */
    data: Prisma.XOR<Prisma.TrabajadorUpdateManyMutationInput, Prisma.TrabajadorUncheckedUpdateManyInput>;
    /**
     * Filter which Trabajadors to update
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * Limit how many Trabajadors to update.
     */
    limit?: number;
};
/**
 * Trabajador upsert
 */
export type TrabajadorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * The filter to search for the Trabajador to update in case it exists.
     */
    where: Prisma.TrabajadorWhereUniqueInput;
    /**
     * In case the Trabajador found by the `where` argument doesn't exist, create a new Trabajador with this data.
     */
    create: Prisma.XOR<Prisma.TrabajadorCreateInput, Prisma.TrabajadorUncheckedCreateInput>;
    /**
     * In case the Trabajador was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TrabajadorUpdateInput, Prisma.TrabajadorUncheckedUpdateInput>;
};
/**
 * Trabajador delete
 */
export type TrabajadorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
    /**
     * Filter which Trabajador to delete.
     */
    where: Prisma.TrabajadorWhereUniqueInput;
};
/**
 * Trabajador deleteMany
 */
export type TrabajadorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Trabajadors to delete
     */
    where?: Prisma.TrabajadorWhereInput;
    /**
     * Limit how many Trabajadors to delete.
     */
    limit?: number;
};
/**
 * Trabajador.jornales
 */
export type Trabajador$jornalesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Trabajador without action
 */
export type TrabajadorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trabajador
     */
    select?: Prisma.TrabajadorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Trabajador
     */
    omit?: Prisma.TrabajadorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TrabajadorInclude<ExtArgs> | null;
};
//# sourceMappingURL=Trabajador.d.ts.map