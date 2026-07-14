import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Bitacora
 *
 */
export type BitacoraModel = runtime.Types.Result.DefaultSelection<Prisma.$BitacoraPayload>;
export type AggregateBitacora = {
    _count: BitacoraCountAggregateOutputType | null;
    _avg: BitacoraAvgAggregateOutputType | null;
    _sum: BitacoraSumAggregateOutputType | null;
    _min: BitacoraMinAggregateOutputType | null;
    _max: BitacoraMaxAggregateOutputType | null;
};
export type BitacoraAvgAggregateOutputType = {
    id: number | null;
    cantidad: number | null;
    costo: number | null;
    loteId: number | null;
    cultivoId: number | null;
    productoId: number | null;
    userId: number | null;
};
export type BitacoraSumAggregateOutputType = {
    id: number | null;
    cantidad: number | null;
    costo: number | null;
    loteId: number | null;
    cultivoId: number | null;
    productoId: number | null;
    userId: number | null;
};
export type BitacoraMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    actividad: $Enums.ActividadBitacora | null;
    descripcion: string | null;
    cantidad: number | null;
    unidadMedida: string | null;
    costo: number | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    loteId: number | null;
    cultivoId: number | null;
    productoId: number | null;
    userId: number | null;
};
export type BitacoraMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    actividad: $Enums.ActividadBitacora | null;
    descripcion: string | null;
    cantidad: number | null;
    unidadMedida: string | null;
    costo: number | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    loteId: number | null;
    cultivoId: number | null;
    productoId: number | null;
    userId: number | null;
};
export type BitacoraCountAggregateOutputType = {
    id: number;
    fecha: number;
    actividad: number;
    descripcion: number;
    cantidad: number;
    unidadMedida: number;
    costo: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    loteId: number;
    cultivoId: number;
    productoId: number;
    userId: number;
    _all: number;
};
export type BitacoraAvgAggregateInputType = {
    id?: true;
    cantidad?: true;
    costo?: true;
    loteId?: true;
    cultivoId?: true;
    productoId?: true;
    userId?: true;
};
export type BitacoraSumAggregateInputType = {
    id?: true;
    cantidad?: true;
    costo?: true;
    loteId?: true;
    cultivoId?: true;
    productoId?: true;
    userId?: true;
};
export type BitacoraMinAggregateInputType = {
    id?: true;
    fecha?: true;
    actividad?: true;
    descripcion?: true;
    cantidad?: true;
    unidadMedida?: true;
    costo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
    cultivoId?: true;
    productoId?: true;
    userId?: true;
};
export type BitacoraMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    actividad?: true;
    descripcion?: true;
    cantidad?: true;
    unidadMedida?: true;
    costo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
    cultivoId?: true;
    productoId?: true;
    userId?: true;
};
export type BitacoraCountAggregateInputType = {
    id?: true;
    fecha?: true;
    actividad?: true;
    descripcion?: true;
    cantidad?: true;
    unidadMedida?: true;
    costo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
    cultivoId?: true;
    productoId?: true;
    userId?: true;
    _all?: true;
};
export type BitacoraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacora to aggregate.
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BitacoraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bitacoras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bitacoras
    **/
    _count?: true | BitacoraCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: BitacoraAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: BitacoraSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BitacoraMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BitacoraMaxAggregateInputType;
};
export type GetBitacoraAggregateType<T extends BitacoraAggregateArgs> = {
    [P in keyof T & keyof AggregateBitacora]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBitacora[P]> : Prisma.GetScalarType<T[P], AggregateBitacora[P]>;
};
export type BitacoraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
    orderBy?: Prisma.BitacoraOrderByWithAggregationInput | Prisma.BitacoraOrderByWithAggregationInput[];
    by: Prisma.BitacoraScalarFieldEnum[] | Prisma.BitacoraScalarFieldEnum;
    having?: Prisma.BitacoraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BitacoraCountAggregateInputType | true;
    _avg?: BitacoraAvgAggregateInputType;
    _sum?: BitacoraSumAggregateInputType;
    _min?: BitacoraMinAggregateInputType;
    _max?: BitacoraMaxAggregateInputType;
};
export type BitacoraGroupByOutputType = {
    id: number;
    fecha: Date;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad: number | null;
    unidadMedida: string | null;
    costo: number;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    cultivoId: number | null;
    productoId: number | null;
    userId: number;
    _count: BitacoraCountAggregateOutputType | null;
    _avg: BitacoraAvgAggregateOutputType | null;
    _sum: BitacoraSumAggregateOutputType | null;
    _min: BitacoraMinAggregateOutputType | null;
    _max: BitacoraMaxAggregateOutputType | null;
};
export type GetBitacoraGroupByPayload<T extends BitacoraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BitacoraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BitacoraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BitacoraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BitacoraGroupByOutputType[P]>;
}>>;
export type BitacoraWhereInput = {
    AND?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    OR?: Prisma.BitacoraWhereInput[];
    NOT?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    id?: Prisma.IntFilter<"Bitacora"> | number;
    fecha?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFilter<"Bitacora"> | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFilter<"Bitacora"> | string;
    cantidad?: Prisma.FloatNullableFilter<"Bitacora"> | number | null;
    unidadMedida?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    costo?: Prisma.FloatFilter<"Bitacora"> | number;
    observaciones?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    loteId?: Prisma.IntFilter<"Bitacora"> | number;
    cultivoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    productoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    userId?: Prisma.IntFilter<"Bitacora"> | number;
    lote?: Prisma.XOR<Prisma.LoteScalarRelationFilter, Prisma.LoteWhereInput>;
    cultivo?: Prisma.XOR<Prisma.CultivoNullableScalarRelationFilter, Prisma.CultivoWhereInput> | null;
    producto?: Prisma.XOR<Prisma.ProductoNullableScalarRelationFilter, Prisma.ProductoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type BitacoraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    unidadMedida?: Prisma.SortOrderInput | Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lote?: Prisma.LoteOrderByWithRelationInput;
    cultivo?: Prisma.CultivoOrderByWithRelationInput;
    producto?: Prisma.ProductoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BitacoraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    OR?: Prisma.BitacoraWhereInput[];
    NOT?: Prisma.BitacoraWhereInput | Prisma.BitacoraWhereInput[];
    fecha?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFilter<"Bitacora"> | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFilter<"Bitacora"> | string;
    cantidad?: Prisma.FloatNullableFilter<"Bitacora"> | number | null;
    unidadMedida?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    costo?: Prisma.FloatFilter<"Bitacora"> | number;
    observaciones?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    loteId?: Prisma.IntFilter<"Bitacora"> | number;
    cultivoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    productoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    userId?: Prisma.IntFilter<"Bitacora"> | number;
    lote?: Prisma.XOR<Prisma.LoteScalarRelationFilter, Prisma.LoteWhereInput>;
    cultivo?: Prisma.XOR<Prisma.CultivoNullableScalarRelationFilter, Prisma.CultivoWhereInput> | null;
    producto?: Prisma.XOR<Prisma.ProductoNullableScalarRelationFilter, Prisma.ProductoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type BitacoraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    unidadMedida?: Prisma.SortOrderInput | Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    productoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.BitacoraCountOrderByAggregateInput;
    _avg?: Prisma.BitacoraAvgOrderByAggregateInput;
    _max?: Prisma.BitacoraMaxOrderByAggregateInput;
    _min?: Prisma.BitacoraMinOrderByAggregateInput;
    _sum?: Prisma.BitacoraSumOrderByAggregateInput;
};
export type BitacoraScalarWhereWithAggregatesInput = {
    AND?: Prisma.BitacoraScalarWhereWithAggregatesInput | Prisma.BitacoraScalarWhereWithAggregatesInput[];
    OR?: Prisma.BitacoraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BitacoraScalarWhereWithAggregatesInput | Prisma.BitacoraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Bitacora"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Bitacora"> | Date | string;
    actividad?: Prisma.EnumActividadBitacoraWithAggregatesFilter<"Bitacora"> | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringWithAggregatesFilter<"Bitacora"> | string;
    cantidad?: Prisma.FloatNullableWithAggregatesFilter<"Bitacora"> | number | null;
    unidadMedida?: Prisma.StringNullableWithAggregatesFilter<"Bitacora"> | string | null;
    costo?: Prisma.FloatWithAggregatesFilter<"Bitacora"> | number;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"Bitacora"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Bitacora"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Bitacora"> | Date | string;
    loteId?: Prisma.IntWithAggregatesFilter<"Bitacora"> | number;
    cultivoId?: Prisma.IntNullableWithAggregatesFilter<"Bitacora"> | number | null;
    productoId?: Prisma.IntNullableWithAggregatesFilter<"Bitacora"> | number | null;
    userId?: Prisma.IntWithAggregatesFilter<"Bitacora"> | number;
};
export type BitacoraCreateInput = {
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutBitacorasInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutBitacorasInput;
    producto?: Prisma.ProductoCreateNestedOneWithoutBitacorasInput;
    user: Prisma.UserCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    productoId?: number | null;
    userId: number;
};
export type BitacoraUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutBitacorasNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutBitacorasNestedInput;
    producto?: Prisma.ProductoUpdateOneWithoutBitacorasNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraCreateManyInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    productoId?: number | null;
    userId: number;
};
export type BitacoraUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BitacoraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraListRelationFilter = {
    every?: Prisma.BitacoraWhereInput;
    some?: Prisma.BitacoraWhereInput;
    none?: Prisma.BitacoraWhereInput;
};
export type BitacoraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BitacoraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    unidadMedida?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BitacoraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BitacoraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    unidadMedida?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BitacoraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    actividad?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    unidadMedida?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BitacoraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    costo?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    cultivoId?: Prisma.SortOrder;
    productoId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type BitacoraCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput> | Prisma.BitacoraCreateWithoutUserInput[] | Prisma.BitacoraUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutUserInput | Prisma.BitacoraCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BitacoraCreateManyUserInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput> | Prisma.BitacoraCreateWithoutUserInput[] | Prisma.BitacoraUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutUserInput | Prisma.BitacoraCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BitacoraCreateManyUserInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput> | Prisma.BitacoraCreateWithoutUserInput[] | Prisma.BitacoraUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutUserInput | Prisma.BitacoraCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutUserInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BitacoraCreateManyUserInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutUserInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutUserInput | Prisma.BitacoraUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput> | Prisma.BitacoraCreateWithoutUserInput[] | Prisma.BitacoraUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutUserInput | Prisma.BitacoraCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutUserInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BitacoraCreateManyUserInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutUserInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutUserInput | Prisma.BitacoraUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput> | Prisma.BitacoraCreateWithoutLoteInput[] | Prisma.BitacoraUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutLoteInput | Prisma.BitacoraCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.BitacoraCreateManyLoteInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUncheckedCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput> | Prisma.BitacoraCreateWithoutLoteInput[] | Prisma.BitacoraUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutLoteInput | Prisma.BitacoraCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.BitacoraCreateManyLoteInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput> | Prisma.BitacoraCreateWithoutLoteInput[] | Prisma.BitacoraUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutLoteInput | Prisma.BitacoraCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutLoteInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.BitacoraCreateManyLoteInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutLoteInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutLoteInput | Prisma.BitacoraUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput> | Prisma.BitacoraCreateWithoutLoteInput[] | Prisma.BitacoraUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutLoteInput | Prisma.BitacoraCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutLoteInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.BitacoraCreateManyLoteInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutLoteInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutLoteInput | Prisma.BitacoraUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraCreateNestedManyWithoutCultivoInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput> | Prisma.BitacoraCreateWithoutCultivoInput[] | Prisma.BitacoraUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutCultivoInput | Prisma.BitacoraCreateOrConnectWithoutCultivoInput[];
    createMany?: Prisma.BitacoraCreateManyCultivoInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUncheckedCreateNestedManyWithoutCultivoInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput> | Prisma.BitacoraCreateWithoutCultivoInput[] | Prisma.BitacoraUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutCultivoInput | Prisma.BitacoraCreateOrConnectWithoutCultivoInput[];
    createMany?: Prisma.BitacoraCreateManyCultivoInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUpdateManyWithoutCultivoNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput> | Prisma.BitacoraCreateWithoutCultivoInput[] | Prisma.BitacoraUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutCultivoInput | Prisma.BitacoraCreateOrConnectWithoutCultivoInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutCultivoInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutCultivoInput[];
    createMany?: Prisma.BitacoraCreateManyCultivoInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutCultivoInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutCultivoInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutCultivoInput | Prisma.BitacoraUpdateManyWithWhereWithoutCultivoInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraUncheckedUpdateManyWithoutCultivoNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput> | Prisma.BitacoraCreateWithoutCultivoInput[] | Prisma.BitacoraUncheckedCreateWithoutCultivoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutCultivoInput | Prisma.BitacoraCreateOrConnectWithoutCultivoInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutCultivoInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutCultivoInput[];
    createMany?: Prisma.BitacoraCreateManyCultivoInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutCultivoInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutCultivoInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutCultivoInput | Prisma.BitacoraUpdateManyWithWhereWithoutCultivoInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput> | Prisma.BitacoraCreateWithoutProductoInput[] | Prisma.BitacoraUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutProductoInput | Prisma.BitacoraCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.BitacoraCreateManyProductoInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput> | Prisma.BitacoraCreateWithoutProductoInput[] | Prisma.BitacoraUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutProductoInput | Prisma.BitacoraCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.BitacoraCreateManyProductoInputEnvelope;
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
};
export type BitacoraUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput> | Prisma.BitacoraCreateWithoutProductoInput[] | Prisma.BitacoraUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutProductoInput | Prisma.BitacoraCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutProductoInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.BitacoraCreateManyProductoInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutProductoInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutProductoInput | Prisma.BitacoraUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type BitacoraUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput> | Prisma.BitacoraCreateWithoutProductoInput[] | Prisma.BitacoraUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.BitacoraCreateOrConnectWithoutProductoInput | Prisma.BitacoraCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.BitacoraUpsertWithWhereUniqueWithoutProductoInput | Prisma.BitacoraUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.BitacoraCreateManyProductoInputEnvelope;
    set?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    disconnect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    delete?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    connect?: Prisma.BitacoraWhereUniqueInput | Prisma.BitacoraWhereUniqueInput[];
    update?: Prisma.BitacoraUpdateWithWhereUniqueWithoutProductoInput | Prisma.BitacoraUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.BitacoraUpdateManyWithWhereWithoutProductoInput | Prisma.BitacoraUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
};
export type EnumActividadBitacoraFieldUpdateOperationsInput = {
    set?: $Enums.ActividadBitacora;
};
export type BitacoraCreateWithoutUserInput = {
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutBitacorasInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutBitacorasInput;
    producto?: Prisma.ProductoCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateWithoutUserInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    productoId?: number | null;
};
export type BitacoraCreateOrConnectWithoutUserInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput>;
};
export type BitacoraCreateManyUserInputEnvelope = {
    data: Prisma.BitacoraCreateManyUserInput | Prisma.BitacoraCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BitacoraUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutUserInput, Prisma.BitacoraUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutUserInput, Prisma.BitacoraUncheckedCreateWithoutUserInput>;
};
export type BitacoraUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutUserInput, Prisma.BitacoraUncheckedUpdateWithoutUserInput>;
};
export type BitacoraUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyWithoutUserInput>;
};
export type BitacoraScalarWhereInput = {
    AND?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
    OR?: Prisma.BitacoraScalarWhereInput[];
    NOT?: Prisma.BitacoraScalarWhereInput | Prisma.BitacoraScalarWhereInput[];
    id?: Prisma.IntFilter<"Bitacora"> | number;
    fecha?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFilter<"Bitacora"> | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFilter<"Bitacora"> | string;
    cantidad?: Prisma.FloatNullableFilter<"Bitacora"> | number | null;
    unidadMedida?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    costo?: Prisma.FloatFilter<"Bitacora"> | number;
    observaciones?: Prisma.StringNullableFilter<"Bitacora"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Bitacora"> | Date | string;
    loteId?: Prisma.IntFilter<"Bitacora"> | number;
    cultivoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    productoId?: Prisma.IntNullableFilter<"Bitacora"> | number | null;
    userId?: Prisma.IntFilter<"Bitacora"> | number;
};
export type BitacoraCreateWithoutLoteInput = {
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutBitacorasInput;
    producto?: Prisma.ProductoCreateNestedOneWithoutBitacorasInput;
    user: Prisma.UserCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateWithoutLoteInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivoId?: number | null;
    productoId?: number | null;
    userId: number;
};
export type BitacoraCreateOrConnectWithoutLoteInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput>;
};
export type BitacoraCreateManyLoteInputEnvelope = {
    data: Prisma.BitacoraCreateManyLoteInput | Prisma.BitacoraCreateManyLoteInput[];
    skipDuplicates?: boolean;
};
export type BitacoraUpsertWithWhereUniqueWithoutLoteInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutLoteInput, Prisma.BitacoraUncheckedUpdateWithoutLoteInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutLoteInput, Prisma.BitacoraUncheckedCreateWithoutLoteInput>;
};
export type BitacoraUpdateWithWhereUniqueWithoutLoteInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutLoteInput, Prisma.BitacoraUncheckedUpdateWithoutLoteInput>;
};
export type BitacoraUpdateManyWithWhereWithoutLoteInput = {
    where: Prisma.BitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyWithoutLoteInput>;
};
export type BitacoraCreateWithoutCultivoInput = {
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutBitacorasInput;
    producto?: Prisma.ProductoCreateNestedOneWithoutBitacorasInput;
    user: Prisma.UserCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateWithoutCultivoInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    productoId?: number | null;
    userId: number;
};
export type BitacoraCreateOrConnectWithoutCultivoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput>;
};
export type BitacoraCreateManyCultivoInputEnvelope = {
    data: Prisma.BitacoraCreateManyCultivoInput | Prisma.BitacoraCreateManyCultivoInput[];
    skipDuplicates?: boolean;
};
export type BitacoraUpsertWithWhereUniqueWithoutCultivoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutCultivoInput, Prisma.BitacoraUncheckedUpdateWithoutCultivoInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutCultivoInput, Prisma.BitacoraUncheckedCreateWithoutCultivoInput>;
};
export type BitacoraUpdateWithWhereUniqueWithoutCultivoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutCultivoInput, Prisma.BitacoraUncheckedUpdateWithoutCultivoInput>;
};
export type BitacoraUpdateManyWithWhereWithoutCultivoInput = {
    where: Prisma.BitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyWithoutCultivoInput>;
};
export type BitacoraCreateWithoutProductoInput = {
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutBitacorasInput;
    cultivo?: Prisma.CultivoCreateNestedOneWithoutBitacorasInput;
    user: Prisma.UserCreateNestedOneWithoutBitacorasInput;
};
export type BitacoraUncheckedCreateWithoutProductoInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    userId: number;
};
export type BitacoraCreateOrConnectWithoutProductoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput>;
};
export type BitacoraCreateManyProductoInputEnvelope = {
    data: Prisma.BitacoraCreateManyProductoInput | Prisma.BitacoraCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type BitacoraUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    update: Prisma.XOR<Prisma.BitacoraUpdateWithoutProductoInput, Prisma.BitacoraUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.BitacoraCreateWithoutProductoInput, Prisma.BitacoraUncheckedCreateWithoutProductoInput>;
};
export type BitacoraUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.BitacoraWhereUniqueInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateWithoutProductoInput, Prisma.BitacoraUncheckedUpdateWithoutProductoInput>;
};
export type BitacoraUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.BitacoraScalarWhereInput;
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyWithoutProductoInput>;
};
export type BitacoraCreateManyUserInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    productoId?: number | null;
};
export type BitacoraUpdateWithoutUserInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutBitacorasNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutBitacorasNestedInput;
    producto?: Prisma.ProductoUpdateOneWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BitacoraUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BitacoraCreateManyLoteInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cultivoId?: number | null;
    productoId?: number | null;
    userId: number;
};
export type BitacoraUpdateWithoutLoteInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivo?: Prisma.CultivoUpdateOneWithoutBitacorasNestedInput;
    producto?: Prisma.ProductoUpdateOneWithoutBitacorasNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraUncheckedUpdateManyWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraCreateManyCultivoInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    productoId?: number | null;
    userId: number;
};
export type BitacoraUpdateWithoutCultivoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutBitacorasNestedInput;
    producto?: Prisma.ProductoUpdateOneWithoutBitacorasNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateWithoutCultivoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraUncheckedUpdateManyWithoutCultivoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    productoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraCreateManyProductoInput = {
    id?: number;
    fecha?: Date | string;
    actividad: $Enums.ActividadBitacora;
    descripcion: string;
    cantidad?: number | null;
    unidadMedida?: string | null;
    costo?: number;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    cultivoId?: number | null;
    userId: number;
};
export type BitacoraUpdateWithoutProductoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutBitacorasNestedInput;
    cultivo?: Prisma.CultivoUpdateOneWithoutBitacorasNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutBitacorasNestedInput;
};
export type BitacoraUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actividad?: Prisma.EnumActividadBitacoraFieldUpdateOperationsInput | $Enums.ActividadBitacora;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    unidadMedida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    costo?: Prisma.FloatFieldUpdateOperationsInput | number;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    cultivoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type BitacoraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    actividad?: boolean;
    descripcion?: boolean;
    cantidad?: boolean;
    unidadMedida?: boolean;
    costo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    cultivoId?: boolean;
    productoId?: boolean;
    userId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    actividad?: boolean;
    descripcion?: boolean;
    cantidad?: boolean;
    unidadMedida?: boolean;
    costo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    cultivoId?: boolean;
    productoId?: boolean;
    userId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    actividad?: boolean;
    descripcion?: boolean;
    cantidad?: boolean;
    unidadMedida?: boolean;
    costo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    cultivoId?: boolean;
    productoId?: boolean;
    userId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bitacora"]>;
export type BitacoraSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    actividad?: boolean;
    descripcion?: boolean;
    cantidad?: boolean;
    unidadMedida?: boolean;
    costo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    cultivoId?: boolean;
    productoId?: boolean;
    userId?: boolean;
};
export type BitacoraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "actividad" | "descripcion" | "cantidad" | "unidadMedida" | "costo" | "observaciones" | "createdAt" | "updatedAt" | "loteId" | "cultivoId" | "productoId" | "userId", ExtArgs["result"]["bitacora"]>;
export type BitacoraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BitacoraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BitacoraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    cultivo?: boolean | Prisma.Bitacora$cultivoArgs<ExtArgs>;
    producto?: boolean | Prisma.Bitacora$productoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BitacoraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Bitacora";
    objects: {
        lote: Prisma.$LotePayload<ExtArgs>;
        cultivo: Prisma.$CultivoPayload<ExtArgs> | null;
        producto: Prisma.$ProductoPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date;
        actividad: $Enums.ActividadBitacora;
        descripcion: string;
        cantidad: number | null;
        unidadMedida: string | null;
        costo: number;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
        loteId: number;
        cultivoId: number | null;
        productoId: number | null;
        userId: number;
    }, ExtArgs["result"]["bitacora"]>;
    composites: {};
};
export type BitacoraGetPayload<S extends boolean | null | undefined | BitacoraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BitacoraPayload, S>;
export type BitacoraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BitacoraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BitacoraCountAggregateInputType | true;
};
export interface BitacoraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Bitacora'];
        meta: {
            name: 'Bitacora';
        };
    };
    /**
     * Find zero or one Bitacora that matches the filter.
     * @param {BitacoraFindUniqueArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BitacoraFindUniqueArgs>(args: Prisma.SelectSubset<T, BitacoraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Bitacora that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BitacoraFindUniqueOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BitacoraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BitacoraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bitacora that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BitacoraFindFirstArgs>(args?: Prisma.SelectSubset<T, BitacoraFindFirstArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Bitacora that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindFirstOrThrowArgs} args - Arguments to find a Bitacora
     * @example
     * // Get one Bitacora
     * const bitacora = await prisma.bitacora.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BitacoraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BitacoraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Bitacoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bitacoras
     * const bitacoras = await prisma.bitacora.findMany()
     *
     * // Get first 10 Bitacoras
     * const bitacoras = await prisma.bitacora.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BitacoraFindManyArgs>(args?: Prisma.SelectSubset<T, BitacoraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Bitacora.
     * @param {BitacoraCreateArgs} args - Arguments to create a Bitacora.
     * @example
     * // Create one Bitacora
     * const Bitacora = await prisma.bitacora.create({
     *   data: {
     *     // ... data to create a Bitacora
     *   }
     * })
     *
     */
    create<T extends BitacoraCreateArgs>(args: Prisma.SelectSubset<T, BitacoraCreateArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Bitacoras.
     * @param {BitacoraCreateManyArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BitacoraCreateManyArgs>(args?: Prisma.SelectSubset<T, BitacoraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Bitacoras and returns the data saved in the database.
     * @param {BitacoraCreateManyAndReturnArgs} args - Arguments to create many Bitacoras.
     * @example
     * // Create many Bitacoras
     * const bitacora = await prisma.bitacora.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bitacoras and only return the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BitacoraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BitacoraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Bitacora.
     * @param {BitacoraDeleteArgs} args - Arguments to delete one Bitacora.
     * @example
     * // Delete one Bitacora
     * const Bitacora = await prisma.bitacora.delete({
     *   where: {
     *     // ... filter to delete one Bitacora
     *   }
     * })
     *
     */
    delete<T extends BitacoraDeleteArgs>(args: Prisma.SelectSubset<T, BitacoraDeleteArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Bitacora.
     * @param {BitacoraUpdateArgs} args - Arguments to update one Bitacora.
     * @example
     * // Update one Bitacora
     * const bitacora = await prisma.bitacora.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BitacoraUpdateArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Bitacoras.
     * @param {BitacoraDeleteManyArgs} args - Arguments to filter Bitacoras to delete.
     * @example
     * // Delete a few Bitacoras
     * const { count } = await prisma.bitacora.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BitacoraDeleteManyArgs>(args?: Prisma.SelectSubset<T, BitacoraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BitacoraUpdateManyArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Bitacoras and returns the data updated in the database.
     * @param {BitacoraUpdateManyAndReturnArgs} args - Arguments to update many Bitacoras.
     * @example
     * // Update many Bitacoras
     * const bitacora = await prisma.bitacora.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bitacoras and only return the `id`
     * const bitacoraWithIdOnly = await prisma.bitacora.updateManyAndReturn({
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
    updateManyAndReturn<T extends BitacoraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BitacoraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Bitacora.
     * @param {BitacoraUpsertArgs} args - Arguments to update or create a Bitacora.
     * @example
     * // Update or create a Bitacora
     * const bitacora = await prisma.bitacora.upsert({
     *   create: {
     *     // ... data to create a Bitacora
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bitacora we want to update
     *   }
     * })
     */
    upsert<T extends BitacoraUpsertArgs>(args: Prisma.SelectSubset<T, BitacoraUpsertArgs<ExtArgs>>): Prisma.Prisma__BitacoraClient<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Bitacoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraCountArgs} args - Arguments to filter Bitacoras to count.
     * @example
     * // Count the number of Bitacoras
     * const count = await prisma.bitacora.count({
     *   where: {
     *     // ... the filter for the Bitacoras we want to count
     *   }
     * })
    **/
    count<T extends BitacoraCountArgs>(args?: Prisma.Subset<T, BitacoraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BitacoraCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BitacoraAggregateArgs>(args: Prisma.Subset<T, BitacoraAggregateArgs>): Prisma.PrismaPromise<GetBitacoraAggregateType<T>>;
    /**
     * Group by Bitacora.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BitacoraGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BitacoraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BitacoraGroupByArgs['orderBy'];
    } : {
        orderBy?: BitacoraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BitacoraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBitacoraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Bitacora model
     */
    readonly fields: BitacoraFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Bitacora.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BitacoraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lote<T extends Prisma.LoteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoteDefaultArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cultivo<T extends Prisma.Bitacora$cultivoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bitacora$cultivoArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.Bitacora$productoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Bitacora$productoArgs<ExtArgs>>): Prisma.Prisma__ProductoClient<runtime.Types.Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Bitacora model
 */
export interface BitacoraFieldRefs {
    readonly id: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Bitacora", 'DateTime'>;
    readonly actividad: Prisma.FieldRef<"Bitacora", 'ActividadBitacora'>;
    readonly descripcion: Prisma.FieldRef<"Bitacora", 'String'>;
    readonly cantidad: Prisma.FieldRef<"Bitacora", 'Float'>;
    readonly unidadMedida: Prisma.FieldRef<"Bitacora", 'String'>;
    readonly costo: Prisma.FieldRef<"Bitacora", 'Float'>;
    readonly observaciones: Prisma.FieldRef<"Bitacora", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Bitacora", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Bitacora", 'DateTime'>;
    readonly loteId: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly cultivoId: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly productoId: Prisma.FieldRef<"Bitacora", 'Int'>;
    readonly userId: Prisma.FieldRef<"Bitacora", 'Int'>;
}
/**
 * Bitacora findUnique
 */
export type BitacoraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bitacora to fetch.
     */
    where: Prisma.BitacoraWhereUniqueInput;
};
/**
 * Bitacora findUniqueOrThrow
 */
export type BitacoraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bitacora to fetch.
     */
    where: Prisma.BitacoraWhereUniqueInput;
};
/**
 * Bitacora findFirst
 */
export type BitacoraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bitacoras.
     */
    cursor?: Prisma.BitacoraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bitacoras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
/**
 * Bitacora findFirstOrThrow
 */
export type BitacoraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bitacora to fetch.
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bitacoras.
     */
    cursor?: Prisma.BitacoraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bitacoras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
/**
 * Bitacora findMany
 */
export type BitacoraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Bitacoras to fetch.
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bitacoras to fetch.
     */
    orderBy?: Prisma.BitacoraOrderByWithRelationInput | Prisma.BitacoraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bitacoras.
     */
    cursor?: Prisma.BitacoraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bitacoras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bitacoras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bitacoras.
     */
    distinct?: Prisma.BitacoraScalarFieldEnum | Prisma.BitacoraScalarFieldEnum[];
};
/**
 * Bitacora create
 */
export type BitacoraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Bitacora.
     */
    data: Prisma.XOR<Prisma.BitacoraCreateInput, Prisma.BitacoraUncheckedCreateInput>;
};
/**
 * Bitacora createMany
 */
export type BitacoraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bitacoras.
     */
    data: Prisma.BitacoraCreateManyInput | Prisma.BitacoraCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Bitacora createManyAndReturn
 */
export type BitacoraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: Prisma.BitacoraSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    /**
     * The data used to create many Bitacoras.
     */
    data: Prisma.BitacoraCreateManyInput | Prisma.BitacoraCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BitacoraIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Bitacora update
 */
export type BitacoraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Bitacora.
     */
    data: Prisma.XOR<Prisma.BitacoraUpdateInput, Prisma.BitacoraUncheckedUpdateInput>;
    /**
     * Choose, which Bitacora to update.
     */
    where: Prisma.BitacoraWhereUniqueInput;
};
/**
 * Bitacora updateMany
 */
export type BitacoraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Bitacoras.
     */
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyInput>;
    /**
     * Filter which Bitacoras to update
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number;
};
/**
 * Bitacora updateManyAndReturn
 */
export type BitacoraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bitacora
     */
    select?: Prisma.BitacoraSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Bitacora
     */
    omit?: Prisma.BitacoraOmit<ExtArgs> | null;
    /**
     * The data used to update Bitacoras.
     */
    data: Prisma.XOR<Prisma.BitacoraUpdateManyMutationInput, Prisma.BitacoraUncheckedUpdateManyInput>;
    /**
     * Filter which Bitacoras to update
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * Limit how many Bitacoras to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BitacoraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Bitacora upsert
 */
export type BitacoraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Bitacora to update in case it exists.
     */
    where: Prisma.BitacoraWhereUniqueInput;
    /**
     * In case the Bitacora found by the `where` argument doesn't exist, create a new Bitacora with this data.
     */
    create: Prisma.XOR<Prisma.BitacoraCreateInput, Prisma.BitacoraUncheckedCreateInput>;
    /**
     * In case the Bitacora was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BitacoraUpdateInput, Prisma.BitacoraUncheckedUpdateInput>;
};
/**
 * Bitacora delete
 */
export type BitacoraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Bitacora to delete.
     */
    where: Prisma.BitacoraWhereUniqueInput;
};
/**
 * Bitacora deleteMany
 */
export type BitacoraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Bitacoras to delete
     */
    where?: Prisma.BitacoraWhereInput;
    /**
     * Limit how many Bitacoras to delete.
     */
    limit?: number;
};
/**
 * Bitacora.cultivo
 */
export type Bitacora$cultivoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Bitacora.producto
 */
export type Bitacora$productoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: Prisma.ProductoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Producto
     */
    omit?: Prisma.ProductoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductoInclude<ExtArgs> | null;
    where?: Prisma.ProductoWhereInput;
};
/**
 * Bitacora without action
 */
export type BitacoraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Bitacora.d.ts.map