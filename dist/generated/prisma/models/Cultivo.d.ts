import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Cultivo
 *
 */
export type CultivoModel = runtime.Types.Result.DefaultSelection<Prisma.$CultivoPayload>;
export type AggregateCultivo = {
    _count: CultivoCountAggregateOutputType | null;
    _avg: CultivoAvgAggregateOutputType | null;
    _sum: CultivoSumAggregateOutputType | null;
    _min: CultivoMinAggregateOutputType | null;
    _max: CultivoMaxAggregateOutputType | null;
};
export type CultivoAvgAggregateOutputType = {
    id: number | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number | null;
};
export type CultivoSumAggregateOutputType = {
    id: number | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    loteId: number | null;
};
export type CultivoMinAggregateOutputType = {
    id: number | null;
    tipo: $Enums.TipoCultivo | null;
    nombre: string | null;
    variedad: string | null;
    fechaSiembra: Date | null;
    fechaCosechaEstimada: Date | null;
    fechaCosechaReal: Date | null;
    estado: $Enums.EstadoCultivo | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    loteId: number | null;
};
export type CultivoMaxAggregateOutputType = {
    id: number | null;
    tipo: $Enums.TipoCultivo | null;
    nombre: string | null;
    variedad: string | null;
    fechaSiembra: Date | null;
    fechaCosechaEstimada: Date | null;
    fechaCosechaReal: Date | null;
    estado: $Enums.EstadoCultivo | null;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    loteId: number | null;
};
export type CultivoCountAggregateOutputType = {
    id: number;
    tipo: number;
    nombre: number;
    variedad: number;
    fechaSiembra: number;
    fechaCosechaEstimada: number;
    fechaCosechaReal: number;
    estado: number;
    cantidadSembrada: number;
    numeroSoca: number;
    edadCafetal: number;
    plantasPorHectarea: number;
    rendimientoEstimado: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    loteId: number;
    _all: number;
};
export type CultivoAvgAggregateInputType = {
    id?: true;
    cantidadSembrada?: true;
    numeroSoca?: true;
    edadCafetal?: true;
    plantasPorHectarea?: true;
    rendimientoEstimado?: true;
    loteId?: true;
};
export type CultivoSumAggregateInputType = {
    id?: true;
    cantidadSembrada?: true;
    numeroSoca?: true;
    edadCafetal?: true;
    plantasPorHectarea?: true;
    rendimientoEstimado?: true;
    loteId?: true;
};
export type CultivoMinAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    variedad?: true;
    fechaSiembra?: true;
    fechaCosechaEstimada?: true;
    fechaCosechaReal?: true;
    estado?: true;
    cantidadSembrada?: true;
    numeroSoca?: true;
    edadCafetal?: true;
    plantasPorHectarea?: true;
    rendimientoEstimado?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
};
export type CultivoMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    variedad?: true;
    fechaSiembra?: true;
    fechaCosechaEstimada?: true;
    fechaCosechaReal?: true;
    estado?: true;
    cantidadSembrada?: true;
    numeroSoca?: true;
    edadCafetal?: true;
    plantasPorHectarea?: true;
    rendimientoEstimado?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
};
export type CultivoCountAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    variedad?: true;
    fechaSiembra?: true;
    fechaCosechaEstimada?: true;
    fechaCosechaReal?: true;
    estado?: true;
    cantidadSembrada?: true;
    numeroSoca?: true;
    edadCafetal?: true;
    plantasPorHectarea?: true;
    rendimientoEstimado?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    loteId?: true;
    _all?: true;
};
export type CultivoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cultivo to aggregate.
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cultivos to fetch.
     */
    orderBy?: Prisma.CultivoOrderByWithRelationInput | Prisma.CultivoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CultivoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cultivos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cultivos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Cultivos
    **/
    _count?: true | CultivoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CultivoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CultivoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CultivoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CultivoMaxAggregateInputType;
};
export type GetCultivoAggregateType<T extends CultivoAggregateArgs> = {
    [P in keyof T & keyof AggregateCultivo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCultivo[P]> : Prisma.GetScalarType<T[P], AggregateCultivo[P]>;
};
export type CultivoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CultivoWhereInput;
    orderBy?: Prisma.CultivoOrderByWithAggregationInput | Prisma.CultivoOrderByWithAggregationInput[];
    by: Prisma.CultivoScalarFieldEnum[] | Prisma.CultivoScalarFieldEnum;
    having?: Prisma.CultivoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CultivoCountAggregateInputType | true;
    _avg?: CultivoAvgAggregateInputType;
    _sum?: CultivoSumAggregateInputType;
    _min?: CultivoMinAggregateInputType;
    _max?: CultivoMaxAggregateInputType;
};
export type CultivoGroupByOutputType = {
    id: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad: string | null;
    fechaSiembra: Date;
    fechaCosechaEstimada: Date | null;
    fechaCosechaReal: Date | null;
    estado: $Enums.EstadoCultivo;
    cantidadSembrada: number | null;
    numeroSoca: number | null;
    edadCafetal: number | null;
    plantasPorHectarea: number | null;
    rendimientoEstimado: number | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    loteId: number;
    _count: CultivoCountAggregateOutputType | null;
    _avg: CultivoAvgAggregateOutputType | null;
    _sum: CultivoSumAggregateOutputType | null;
    _min: CultivoMinAggregateOutputType | null;
    _max: CultivoMaxAggregateOutputType | null;
};
export type GetCultivoGroupByPayload<T extends CultivoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CultivoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CultivoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CultivoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CultivoGroupByOutputType[P]>;
}>>;
export type CultivoWhereInput = {
    AND?: Prisma.CultivoWhereInput | Prisma.CultivoWhereInput[];
    OR?: Prisma.CultivoWhereInput[];
    NOT?: Prisma.CultivoWhereInput | Prisma.CultivoWhereInput[];
    id?: Prisma.IntFilter<"Cultivo"> | number;
    tipo?: Prisma.EnumTipoCultivoFilter<"Cultivo"> | $Enums.TipoCultivo;
    nombre?: Prisma.StringFilter<"Cultivo"> | string;
    variedad?: Prisma.StringNullableFilter<"Cultivo"> | string | null;
    fechaSiembra?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    fechaCosechaEstimada?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    fechaCosechaReal?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFilter<"Cultivo"> | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    numeroSoca?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    edadCafetal?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    plantasPorHectarea?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    rendimientoEstimado?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    activo?: Prisma.BoolFilter<"Cultivo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    loteId?: Prisma.IntFilter<"Cultivo"> | number;
    lote?: Prisma.XOR<Prisma.LoteScalarRelationFilter, Prisma.LoteWhereInput>;
    gastos?: Prisma.GastoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
};
export type CultivoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    variedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaSiembra?: Prisma.SortOrder;
    fechaCosechaEstimada?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCosechaReal?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrderInput | Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrderInput | Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrderInput | Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    lote?: Prisma.LoteOrderByWithRelationInput;
    gastos?: Prisma.GastoOrderByRelationAggregateInput;
    bitacoras?: Prisma.BitacoraOrderByRelationAggregateInput;
};
export type CultivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CultivoWhereInput | Prisma.CultivoWhereInput[];
    OR?: Prisma.CultivoWhereInput[];
    NOT?: Prisma.CultivoWhereInput | Prisma.CultivoWhereInput[];
    tipo?: Prisma.EnumTipoCultivoFilter<"Cultivo"> | $Enums.TipoCultivo;
    nombre?: Prisma.StringFilter<"Cultivo"> | string;
    variedad?: Prisma.StringNullableFilter<"Cultivo"> | string | null;
    fechaSiembra?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    fechaCosechaEstimada?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    fechaCosechaReal?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFilter<"Cultivo"> | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    numeroSoca?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    edadCafetal?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    plantasPorHectarea?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    rendimientoEstimado?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    activo?: Prisma.BoolFilter<"Cultivo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    loteId?: Prisma.IntFilter<"Cultivo"> | number;
    lote?: Prisma.XOR<Prisma.LoteScalarRelationFilter, Prisma.LoteWhereInput>;
    gastos?: Prisma.GastoListRelationFilter;
    bitacoras?: Prisma.BitacoraListRelationFilter;
}, "id">;
export type CultivoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    variedad?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaSiembra?: Prisma.SortOrder;
    fechaCosechaEstimada?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCosechaReal?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrderInput | Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrderInput | Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrderInput | Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrderInput | Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
    _count?: Prisma.CultivoCountOrderByAggregateInput;
    _avg?: Prisma.CultivoAvgOrderByAggregateInput;
    _max?: Prisma.CultivoMaxOrderByAggregateInput;
    _min?: Prisma.CultivoMinOrderByAggregateInput;
    _sum?: Prisma.CultivoSumOrderByAggregateInput;
};
export type CultivoScalarWhereWithAggregatesInput = {
    AND?: Prisma.CultivoScalarWhereWithAggregatesInput | Prisma.CultivoScalarWhereWithAggregatesInput[];
    OR?: Prisma.CultivoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CultivoScalarWhereWithAggregatesInput | Prisma.CultivoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cultivo"> | number;
    tipo?: Prisma.EnumTipoCultivoWithAggregatesFilter<"Cultivo"> | $Enums.TipoCultivo;
    nombre?: Prisma.StringWithAggregatesFilter<"Cultivo"> | string;
    variedad?: Prisma.StringNullableWithAggregatesFilter<"Cultivo"> | string | null;
    fechaSiembra?: Prisma.DateTimeWithAggregatesFilter<"Cultivo"> | Date | string;
    fechaCosechaEstimada?: Prisma.DateTimeNullableWithAggregatesFilter<"Cultivo"> | Date | string | null;
    fechaCosechaReal?: Prisma.DateTimeNullableWithAggregatesFilter<"Cultivo"> | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoWithAggregatesFilter<"Cultivo"> | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.FloatNullableWithAggregatesFilter<"Cultivo"> | number | null;
    numeroSoca?: Prisma.IntNullableWithAggregatesFilter<"Cultivo"> | number | null;
    edadCafetal?: Prisma.IntNullableWithAggregatesFilter<"Cultivo"> | number | null;
    plantasPorHectarea?: Prisma.FloatNullableWithAggregatesFilter<"Cultivo"> | number | null;
    rendimientoEstimado?: Prisma.FloatNullableWithAggregatesFilter<"Cultivo"> | number | null;
    activo?: Prisma.BoolWithAggregatesFilter<"Cultivo"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Cultivo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Cultivo"> | Date | string;
    loteId?: Prisma.IntWithAggregatesFilter<"Cultivo"> | number;
};
export type CultivoCreateInput = {
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutCultivosInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutCultivoInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutCultivoInput;
};
export type CultivoUncheckedCreateInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutCultivoInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutCultivoInput;
};
export type CultivoUpdateInput = {
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutCultivosNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutCultivoNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutCultivoNestedInput;
};
export type CultivoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutCultivoNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutCultivoNestedInput;
};
export type CultivoCreateManyInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
};
export type CultivoUpdateManyMutationInput = {
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CultivoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CultivoListRelationFilter = {
    every?: Prisma.CultivoWhereInput;
    some?: Prisma.CultivoWhereInput;
    none?: Prisma.CultivoWhereInput;
};
export type CultivoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CultivoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    variedad?: Prisma.SortOrder;
    fechaSiembra?: Prisma.SortOrder;
    fechaCosechaEstimada?: Prisma.SortOrder;
    fechaCosechaReal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
};
export type CultivoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
};
export type CultivoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    variedad?: Prisma.SortOrder;
    fechaSiembra?: Prisma.SortOrder;
    fechaCosechaEstimada?: Prisma.SortOrder;
    fechaCosechaReal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
};
export type CultivoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    variedad?: Prisma.SortOrder;
    fechaSiembra?: Prisma.SortOrder;
    fechaCosechaEstimada?: Prisma.SortOrder;
    fechaCosechaReal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
};
export type CultivoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidadSembrada?: Prisma.SortOrder;
    numeroSoca?: Prisma.SortOrder;
    edadCafetal?: Prisma.SortOrder;
    plantasPorHectarea?: Prisma.SortOrder;
    rendimientoEstimado?: Prisma.SortOrder;
    loteId?: Prisma.SortOrder;
};
export type CultivoNullableScalarRelationFilter = {
    is?: Prisma.CultivoWhereInput | null;
    isNot?: Prisma.CultivoWhereInput | null;
};
export type CultivoCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput> | Prisma.CultivoCreateWithoutLoteInput[] | Prisma.CultivoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutLoteInput | Prisma.CultivoCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.CultivoCreateManyLoteInputEnvelope;
    connect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
};
export type CultivoUncheckedCreateNestedManyWithoutLoteInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput> | Prisma.CultivoCreateWithoutLoteInput[] | Prisma.CultivoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutLoteInput | Prisma.CultivoCreateOrConnectWithoutLoteInput[];
    createMany?: Prisma.CultivoCreateManyLoteInputEnvelope;
    connect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
};
export type CultivoUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput> | Prisma.CultivoCreateWithoutLoteInput[] | Prisma.CultivoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutLoteInput | Prisma.CultivoCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.CultivoUpsertWithWhereUniqueWithoutLoteInput | Prisma.CultivoUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.CultivoCreateManyLoteInputEnvelope;
    set?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    disconnect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    delete?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    connect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    update?: Prisma.CultivoUpdateWithWhereUniqueWithoutLoteInput | Prisma.CultivoUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.CultivoUpdateManyWithWhereWithoutLoteInput | Prisma.CultivoUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.CultivoScalarWhereInput | Prisma.CultivoScalarWhereInput[];
};
export type CultivoUncheckedUpdateManyWithoutLoteNestedInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput> | Prisma.CultivoCreateWithoutLoteInput[] | Prisma.CultivoUncheckedCreateWithoutLoteInput[];
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutLoteInput | Prisma.CultivoCreateOrConnectWithoutLoteInput[];
    upsert?: Prisma.CultivoUpsertWithWhereUniqueWithoutLoteInput | Prisma.CultivoUpsertWithWhereUniqueWithoutLoteInput[];
    createMany?: Prisma.CultivoCreateManyLoteInputEnvelope;
    set?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    disconnect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    delete?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    connect?: Prisma.CultivoWhereUniqueInput | Prisma.CultivoWhereUniqueInput[];
    update?: Prisma.CultivoUpdateWithWhereUniqueWithoutLoteInput | Prisma.CultivoUpdateWithWhereUniqueWithoutLoteInput[];
    updateMany?: Prisma.CultivoUpdateManyWithWhereWithoutLoteInput | Prisma.CultivoUpdateManyWithWhereWithoutLoteInput[];
    deleteMany?: Prisma.CultivoScalarWhereInput | Prisma.CultivoScalarWhereInput[];
};
export type EnumTipoCultivoFieldUpdateOperationsInput = {
    set?: $Enums.TipoCultivo;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EnumEstadoCultivoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCultivo;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CultivoCreateNestedOneWithoutGastosInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutGastosInput, Prisma.CultivoUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutGastosInput;
    connect?: Prisma.CultivoWhereUniqueInput;
};
export type CultivoUpdateOneWithoutGastosNestedInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutGastosInput, Prisma.CultivoUncheckedCreateWithoutGastosInput>;
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutGastosInput;
    upsert?: Prisma.CultivoUpsertWithoutGastosInput;
    disconnect?: Prisma.CultivoWhereInput | boolean;
    delete?: Prisma.CultivoWhereInput | boolean;
    connect?: Prisma.CultivoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CultivoUpdateToOneWithWhereWithoutGastosInput, Prisma.CultivoUpdateWithoutGastosInput>, Prisma.CultivoUncheckedUpdateWithoutGastosInput>;
};
export type CultivoCreateNestedOneWithoutBitacorasInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutBitacorasInput, Prisma.CultivoUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutBitacorasInput;
    connect?: Prisma.CultivoWhereUniqueInput;
};
export type CultivoUpdateOneWithoutBitacorasNestedInput = {
    create?: Prisma.XOR<Prisma.CultivoCreateWithoutBitacorasInput, Prisma.CultivoUncheckedCreateWithoutBitacorasInput>;
    connectOrCreate?: Prisma.CultivoCreateOrConnectWithoutBitacorasInput;
    upsert?: Prisma.CultivoUpsertWithoutBitacorasInput;
    disconnect?: Prisma.CultivoWhereInput | boolean;
    delete?: Prisma.CultivoWhereInput | boolean;
    connect?: Prisma.CultivoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CultivoUpdateToOneWithWhereWithoutBitacorasInput, Prisma.CultivoUpdateWithoutBitacorasInput>, Prisma.CultivoUncheckedUpdateWithoutBitacorasInput>;
};
export type CultivoCreateWithoutLoteInput = {
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gastos?: Prisma.GastoCreateNestedManyWithoutCultivoInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutCultivoInput;
};
export type CultivoUncheckedCreateWithoutLoteInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutCultivoInput;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutCultivoInput;
};
export type CultivoCreateOrConnectWithoutLoteInput = {
    where: Prisma.CultivoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput>;
};
export type CultivoCreateManyLoteInputEnvelope = {
    data: Prisma.CultivoCreateManyLoteInput | Prisma.CultivoCreateManyLoteInput[];
    skipDuplicates?: boolean;
};
export type CultivoUpsertWithWhereUniqueWithoutLoteInput = {
    where: Prisma.CultivoWhereUniqueInput;
    update: Prisma.XOR<Prisma.CultivoUpdateWithoutLoteInput, Prisma.CultivoUncheckedUpdateWithoutLoteInput>;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutLoteInput, Prisma.CultivoUncheckedCreateWithoutLoteInput>;
};
export type CultivoUpdateWithWhereUniqueWithoutLoteInput = {
    where: Prisma.CultivoWhereUniqueInput;
    data: Prisma.XOR<Prisma.CultivoUpdateWithoutLoteInput, Prisma.CultivoUncheckedUpdateWithoutLoteInput>;
};
export type CultivoUpdateManyWithWhereWithoutLoteInput = {
    where: Prisma.CultivoScalarWhereInput;
    data: Prisma.XOR<Prisma.CultivoUpdateManyMutationInput, Prisma.CultivoUncheckedUpdateManyWithoutLoteInput>;
};
export type CultivoScalarWhereInput = {
    AND?: Prisma.CultivoScalarWhereInput | Prisma.CultivoScalarWhereInput[];
    OR?: Prisma.CultivoScalarWhereInput[];
    NOT?: Prisma.CultivoScalarWhereInput | Prisma.CultivoScalarWhereInput[];
    id?: Prisma.IntFilter<"Cultivo"> | number;
    tipo?: Prisma.EnumTipoCultivoFilter<"Cultivo"> | $Enums.TipoCultivo;
    nombre?: Prisma.StringFilter<"Cultivo"> | string;
    variedad?: Prisma.StringNullableFilter<"Cultivo"> | string | null;
    fechaSiembra?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    fechaCosechaEstimada?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    fechaCosechaReal?: Prisma.DateTimeNullableFilter<"Cultivo"> | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFilter<"Cultivo"> | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    numeroSoca?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    edadCafetal?: Prisma.IntNullableFilter<"Cultivo"> | number | null;
    plantasPorHectarea?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    rendimientoEstimado?: Prisma.FloatNullableFilter<"Cultivo"> | number | null;
    activo?: Prisma.BoolFilter<"Cultivo"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Cultivo"> | Date | string;
    loteId?: Prisma.IntFilter<"Cultivo"> | number;
};
export type CultivoCreateWithoutGastosInput = {
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutCultivosInput;
    bitacoras?: Prisma.BitacoraCreateNestedManyWithoutCultivoInput;
};
export type CultivoUncheckedCreateWithoutGastosInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    bitacoras?: Prisma.BitacoraUncheckedCreateNestedManyWithoutCultivoInput;
};
export type CultivoCreateOrConnectWithoutGastosInput = {
    where: Prisma.CultivoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutGastosInput, Prisma.CultivoUncheckedCreateWithoutGastosInput>;
};
export type CultivoUpsertWithoutGastosInput = {
    update: Prisma.XOR<Prisma.CultivoUpdateWithoutGastosInput, Prisma.CultivoUncheckedUpdateWithoutGastosInput>;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutGastosInput, Prisma.CultivoUncheckedCreateWithoutGastosInput>;
    where?: Prisma.CultivoWhereInput;
};
export type CultivoUpdateToOneWithWhereWithoutGastosInput = {
    where?: Prisma.CultivoWhereInput;
    data: Prisma.XOR<Prisma.CultivoUpdateWithoutGastosInput, Prisma.CultivoUncheckedUpdateWithoutGastosInput>;
};
export type CultivoUpdateWithoutGastosInput = {
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutCultivosNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutCultivoNestedInput;
};
export type CultivoUncheckedUpdateWithoutGastosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutCultivoNestedInput;
};
export type CultivoCreateWithoutBitacorasInput = {
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lote: Prisma.LoteCreateNestedOneWithoutCultivosInput;
    gastos?: Prisma.GastoCreateNestedManyWithoutCultivoInput;
};
export type CultivoUncheckedCreateWithoutBitacorasInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    loteId: number;
    gastos?: Prisma.GastoUncheckedCreateNestedManyWithoutCultivoInput;
};
export type CultivoCreateOrConnectWithoutBitacorasInput = {
    where: Prisma.CultivoWhereUniqueInput;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutBitacorasInput, Prisma.CultivoUncheckedCreateWithoutBitacorasInput>;
};
export type CultivoUpsertWithoutBitacorasInput = {
    update: Prisma.XOR<Prisma.CultivoUpdateWithoutBitacorasInput, Prisma.CultivoUncheckedUpdateWithoutBitacorasInput>;
    create: Prisma.XOR<Prisma.CultivoCreateWithoutBitacorasInput, Prisma.CultivoUncheckedCreateWithoutBitacorasInput>;
    where?: Prisma.CultivoWhereInput;
};
export type CultivoUpdateToOneWithWhereWithoutBitacorasInput = {
    where?: Prisma.CultivoWhereInput;
    data: Prisma.XOR<Prisma.CultivoUpdateWithoutBitacorasInput, Prisma.CultivoUncheckedUpdateWithoutBitacorasInput>;
};
export type CultivoUpdateWithoutBitacorasInput = {
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lote?: Prisma.LoteUpdateOneRequiredWithoutCultivosNestedInput;
    gastos?: Prisma.GastoUpdateManyWithoutCultivoNestedInput;
};
export type CultivoUncheckedUpdateWithoutBitacorasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    loteId?: Prisma.IntFieldUpdateOperationsInput | number;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutCultivoNestedInput;
};
export type CultivoCreateManyLoteInput = {
    id?: number;
    tipo: $Enums.TipoCultivo;
    nombre: string;
    variedad?: string | null;
    fechaSiembra: Date | string;
    fechaCosechaEstimada?: Date | string | null;
    fechaCosechaReal?: Date | string | null;
    estado?: $Enums.EstadoCultivo;
    cantidadSembrada?: number | null;
    numeroSoca?: number | null;
    edadCafetal?: number | null;
    plantasPorHectarea?: number | null;
    rendimientoEstimado?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CultivoUpdateWithoutLoteInput = {
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gastos?: Prisma.GastoUpdateManyWithoutCultivoNestedInput;
    bitacoras?: Prisma.BitacoraUpdateManyWithoutCultivoNestedInput;
};
export type CultivoUncheckedUpdateWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gastos?: Prisma.GastoUncheckedUpdateManyWithoutCultivoNestedInput;
    bitacoras?: Prisma.BitacoraUncheckedUpdateManyWithoutCultivoNestedInput;
};
export type CultivoUncheckedUpdateManyWithoutLoteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.EnumTipoCultivoFieldUpdateOperationsInput | $Enums.TipoCultivo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    variedad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaSiembra?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCosechaEstimada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCosechaReal?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.EnumEstadoCultivoFieldUpdateOperationsInput | $Enums.EstadoCultivo;
    cantidadSembrada?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    numeroSoca?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    edadCafetal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plantasPorHectarea?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    rendimientoEstimado?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CultivoCountOutputType
 */
export type CultivoCountOutputType = {
    gastos: number;
    bitacoras: number;
};
export type CultivoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    gastos?: boolean | CultivoCountOutputTypeCountGastosArgs;
    bitacoras?: boolean | CultivoCountOutputTypeCountBitacorasArgs;
};
/**
 * CultivoCountOutputType without action
 */
export type CultivoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CultivoCountOutputType
     */
    select?: Prisma.CultivoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CultivoCountOutputType without action
 */
export type CultivoCountOutputTypeCountGastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GastoWhereInput;
};
/**
 * CultivoCountOutputType without action
 */
export type CultivoCountOutputTypeCountBitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BitacoraWhereInput;
};
export type CultivoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    variedad?: boolean;
    fechaSiembra?: boolean;
    fechaCosechaEstimada?: boolean;
    fechaCosechaReal?: boolean;
    estado?: boolean;
    cantidadSembrada?: boolean;
    numeroSoca?: boolean;
    edadCafetal?: boolean;
    plantasPorHectarea?: boolean;
    rendimientoEstimado?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    gastos?: boolean | Prisma.Cultivo$gastosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Cultivo$bitacorasArgs<ExtArgs>;
    _count?: boolean | Prisma.CultivoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cultivo"]>;
export type CultivoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    variedad?: boolean;
    fechaSiembra?: boolean;
    fechaCosechaEstimada?: boolean;
    fechaCosechaReal?: boolean;
    estado?: boolean;
    cantidadSembrada?: boolean;
    numeroSoca?: boolean;
    edadCafetal?: boolean;
    plantasPorHectarea?: boolean;
    rendimientoEstimado?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cultivo"]>;
export type CultivoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    variedad?: boolean;
    fechaSiembra?: boolean;
    fechaCosechaEstimada?: boolean;
    fechaCosechaReal?: boolean;
    estado?: boolean;
    cantidadSembrada?: boolean;
    numeroSoca?: boolean;
    edadCafetal?: boolean;
    plantasPorHectarea?: boolean;
    rendimientoEstimado?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cultivo"]>;
export type CultivoSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    variedad?: boolean;
    fechaSiembra?: boolean;
    fechaCosechaEstimada?: boolean;
    fechaCosechaReal?: boolean;
    estado?: boolean;
    cantidadSembrada?: boolean;
    numeroSoca?: boolean;
    edadCafetal?: boolean;
    plantasPorHectarea?: boolean;
    rendimientoEstimado?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    loteId?: boolean;
};
export type CultivoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "nombre" | "variedad" | "fechaSiembra" | "fechaCosechaEstimada" | "fechaCosechaReal" | "estado" | "cantidadSembrada" | "numeroSoca" | "edadCafetal" | "plantasPorHectarea" | "rendimientoEstimado" | "activo" | "createdAt" | "updatedAt" | "loteId", ExtArgs["result"]["cultivo"]>;
export type CultivoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
    gastos?: boolean | Prisma.Cultivo$gastosArgs<ExtArgs>;
    bitacoras?: boolean | Prisma.Cultivo$bitacorasArgs<ExtArgs>;
    _count?: boolean | Prisma.CultivoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CultivoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
};
export type CultivoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lote?: boolean | Prisma.LoteDefaultArgs<ExtArgs>;
};
export type $CultivoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cultivo";
    objects: {
        lote: Prisma.$LotePayload<ExtArgs>;
        gastos: Prisma.$GastoPayload<ExtArgs>[];
        bitacoras: Prisma.$BitacoraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tipo: $Enums.TipoCultivo;
        nombre: string;
        variedad: string | null;
        fechaSiembra: Date;
        fechaCosechaEstimada: Date | null;
        fechaCosechaReal: Date | null;
        estado: $Enums.EstadoCultivo;
        cantidadSembrada: number | null;
        numeroSoca: number | null;
        edadCafetal: number | null;
        plantasPorHectarea: number | null;
        rendimientoEstimado: number | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        loteId: number;
    }, ExtArgs["result"]["cultivo"]>;
    composites: {};
};
export type CultivoGetPayload<S extends boolean | null | undefined | CultivoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CultivoPayload, S>;
export type CultivoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CultivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CultivoCountAggregateInputType | true;
};
export interface CultivoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cultivo'];
        meta: {
            name: 'Cultivo';
        };
    };
    /**
     * Find zero or one Cultivo that matches the filter.
     * @param {CultivoFindUniqueArgs} args - Arguments to find a Cultivo
     * @example
     * // Get one Cultivo
     * const cultivo = await prisma.cultivo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CultivoFindUniqueArgs>(args: Prisma.SelectSubset<T, CultivoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cultivo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CultivoFindUniqueOrThrowArgs} args - Arguments to find a Cultivo
     * @example
     * // Get one Cultivo
     * const cultivo = await prisma.cultivo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CultivoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CultivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cultivo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoFindFirstArgs} args - Arguments to find a Cultivo
     * @example
     * // Get one Cultivo
     * const cultivo = await prisma.cultivo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CultivoFindFirstArgs>(args?: Prisma.SelectSubset<T, CultivoFindFirstArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cultivo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoFindFirstOrThrowArgs} args - Arguments to find a Cultivo
     * @example
     * // Get one Cultivo
     * const cultivo = await prisma.cultivo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CultivoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CultivoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cultivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cultivos
     * const cultivos = await prisma.cultivo.findMany()
     *
     * // Get first 10 Cultivos
     * const cultivos = await prisma.cultivo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cultivoWithIdOnly = await prisma.cultivo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CultivoFindManyArgs>(args?: Prisma.SelectSubset<T, CultivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cultivo.
     * @param {CultivoCreateArgs} args - Arguments to create a Cultivo.
     * @example
     * // Create one Cultivo
     * const Cultivo = await prisma.cultivo.create({
     *   data: {
     *     // ... data to create a Cultivo
     *   }
     * })
     *
     */
    create<T extends CultivoCreateArgs>(args: Prisma.SelectSubset<T, CultivoCreateArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cultivos.
     * @param {CultivoCreateManyArgs} args - Arguments to create many Cultivos.
     * @example
     * // Create many Cultivos
     * const cultivo = await prisma.cultivo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CultivoCreateManyArgs>(args?: Prisma.SelectSubset<T, CultivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Cultivos and returns the data saved in the database.
     * @param {CultivoCreateManyAndReturnArgs} args - Arguments to create many Cultivos.
     * @example
     * // Create many Cultivos
     * const cultivo = await prisma.cultivo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Cultivos and only return the `id`
     * const cultivoWithIdOnly = await prisma.cultivo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CultivoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CultivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Cultivo.
     * @param {CultivoDeleteArgs} args - Arguments to delete one Cultivo.
     * @example
     * // Delete one Cultivo
     * const Cultivo = await prisma.cultivo.delete({
     *   where: {
     *     // ... filter to delete one Cultivo
     *   }
     * })
     *
     */
    delete<T extends CultivoDeleteArgs>(args: Prisma.SelectSubset<T, CultivoDeleteArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cultivo.
     * @param {CultivoUpdateArgs} args - Arguments to update one Cultivo.
     * @example
     * // Update one Cultivo
     * const cultivo = await prisma.cultivo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CultivoUpdateArgs>(args: Prisma.SelectSubset<T, CultivoUpdateArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cultivos.
     * @param {CultivoDeleteManyArgs} args - Arguments to filter Cultivos to delete.
     * @example
     * // Delete a few Cultivos
     * const { count } = await prisma.cultivo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CultivoDeleteManyArgs>(args?: Prisma.SelectSubset<T, CultivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cultivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cultivos
     * const cultivo = await prisma.cultivo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CultivoUpdateManyArgs>(args: Prisma.SelectSubset<T, CultivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cultivos and returns the data updated in the database.
     * @param {CultivoUpdateManyAndReturnArgs} args - Arguments to update many Cultivos.
     * @example
     * // Update many Cultivos
     * const cultivo = await prisma.cultivo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Cultivos and only return the `id`
     * const cultivoWithIdOnly = await prisma.cultivo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CultivoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CultivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Cultivo.
     * @param {CultivoUpsertArgs} args - Arguments to update or create a Cultivo.
     * @example
     * // Update or create a Cultivo
     * const cultivo = await prisma.cultivo.upsert({
     *   create: {
     *     // ... data to create a Cultivo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cultivo we want to update
     *   }
     * })
     */
    upsert<T extends CultivoUpsertArgs>(args: Prisma.SelectSubset<T, CultivoUpsertArgs<ExtArgs>>): Prisma.Prisma__CultivoClient<runtime.Types.Result.GetResult<Prisma.$CultivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cultivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoCountArgs} args - Arguments to filter Cultivos to count.
     * @example
     * // Count the number of Cultivos
     * const count = await prisma.cultivo.count({
     *   where: {
     *     // ... the filter for the Cultivos we want to count
     *   }
     * })
    **/
    count<T extends CultivoCountArgs>(args?: Prisma.Subset<T, CultivoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CultivoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cultivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CultivoAggregateArgs>(args: Prisma.Subset<T, CultivoAggregateArgs>): Prisma.PrismaPromise<GetCultivoAggregateType<T>>;
    /**
     * Group by Cultivo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CultivoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CultivoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CultivoGroupByArgs['orderBy'];
    } : {
        orderBy?: CultivoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CultivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCultivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Cultivo model
     */
    readonly fields: CultivoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Cultivo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CultivoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lote<T extends Prisma.LoteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LoteDefaultArgs<ExtArgs>>): Prisma.Prisma__LoteClient<runtime.Types.Result.GetResult<Prisma.$LotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    gastos<T extends Prisma.Cultivo$gastosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cultivo$gastosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GastoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bitacoras<T extends Prisma.Cultivo$bitacorasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cultivo$bitacorasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BitacoraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Cultivo model
 */
export interface CultivoFieldRefs {
    readonly id: Prisma.FieldRef<"Cultivo", 'Int'>;
    readonly tipo: Prisma.FieldRef<"Cultivo", 'TipoCultivo'>;
    readonly nombre: Prisma.FieldRef<"Cultivo", 'String'>;
    readonly variedad: Prisma.FieldRef<"Cultivo", 'String'>;
    readonly fechaSiembra: Prisma.FieldRef<"Cultivo", 'DateTime'>;
    readonly fechaCosechaEstimada: Prisma.FieldRef<"Cultivo", 'DateTime'>;
    readonly fechaCosechaReal: Prisma.FieldRef<"Cultivo", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"Cultivo", 'EstadoCultivo'>;
    readonly cantidadSembrada: Prisma.FieldRef<"Cultivo", 'Float'>;
    readonly numeroSoca: Prisma.FieldRef<"Cultivo", 'Int'>;
    readonly edadCafetal: Prisma.FieldRef<"Cultivo", 'Int'>;
    readonly plantasPorHectarea: Prisma.FieldRef<"Cultivo", 'Float'>;
    readonly rendimientoEstimado: Prisma.FieldRef<"Cultivo", 'Float'>;
    readonly activo: Prisma.FieldRef<"Cultivo", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Cultivo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Cultivo", 'DateTime'>;
    readonly loteId: Prisma.FieldRef<"Cultivo", 'Int'>;
}
/**
 * Cultivo findUnique
 */
export type CultivoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cultivo to fetch.
     */
    where: Prisma.CultivoWhereUniqueInput;
};
/**
 * Cultivo findUniqueOrThrow
 */
export type CultivoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cultivo to fetch.
     */
    where: Prisma.CultivoWhereUniqueInput;
};
/**
 * Cultivo findFirst
 */
export type CultivoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cultivo to fetch.
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cultivos to fetch.
     */
    orderBy?: Prisma.CultivoOrderByWithRelationInput | Prisma.CultivoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cultivos.
     */
    cursor?: Prisma.CultivoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cultivos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cultivos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cultivos.
     */
    distinct?: Prisma.CultivoScalarFieldEnum | Prisma.CultivoScalarFieldEnum[];
};
/**
 * Cultivo findFirstOrThrow
 */
export type CultivoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cultivo to fetch.
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cultivos to fetch.
     */
    orderBy?: Prisma.CultivoOrderByWithRelationInput | Prisma.CultivoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Cultivos.
     */
    cursor?: Prisma.CultivoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cultivos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cultivos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cultivos.
     */
    distinct?: Prisma.CultivoScalarFieldEnum | Prisma.CultivoScalarFieldEnum[];
};
/**
 * Cultivo findMany
 */
export type CultivoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Cultivos to fetch.
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Cultivos to fetch.
     */
    orderBy?: Prisma.CultivoOrderByWithRelationInput | Prisma.CultivoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Cultivos.
     */
    cursor?: Prisma.CultivoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Cultivos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Cultivos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Cultivos.
     */
    distinct?: Prisma.CultivoScalarFieldEnum | Prisma.CultivoScalarFieldEnum[];
};
/**
 * Cultivo create
 */
export type CultivoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Cultivo.
     */
    data: Prisma.XOR<Prisma.CultivoCreateInput, Prisma.CultivoUncheckedCreateInput>;
};
/**
 * Cultivo createMany
 */
export type CultivoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cultivos.
     */
    data: Prisma.CultivoCreateManyInput | Prisma.CultivoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Cultivo createManyAndReturn
 */
export type CultivoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultivo
     */
    select?: Prisma.CultivoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cultivo
     */
    omit?: Prisma.CultivoOmit<ExtArgs> | null;
    /**
     * The data used to create many Cultivos.
     */
    data: Prisma.CultivoCreateManyInput | Prisma.CultivoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CultivoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Cultivo update
 */
export type CultivoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Cultivo.
     */
    data: Prisma.XOR<Prisma.CultivoUpdateInput, Prisma.CultivoUncheckedUpdateInput>;
    /**
     * Choose, which Cultivo to update.
     */
    where: Prisma.CultivoWhereUniqueInput;
};
/**
 * Cultivo updateMany
 */
export type CultivoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Cultivos.
     */
    data: Prisma.XOR<Prisma.CultivoUpdateManyMutationInput, Prisma.CultivoUncheckedUpdateManyInput>;
    /**
     * Filter which Cultivos to update
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * Limit how many Cultivos to update.
     */
    limit?: number;
};
/**
 * Cultivo updateManyAndReturn
 */
export type CultivoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cultivo
     */
    select?: Prisma.CultivoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Cultivo
     */
    omit?: Prisma.CultivoOmit<ExtArgs> | null;
    /**
     * The data used to update Cultivos.
     */
    data: Prisma.XOR<Prisma.CultivoUpdateManyMutationInput, Prisma.CultivoUncheckedUpdateManyInput>;
    /**
     * Filter which Cultivos to update
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * Limit how many Cultivos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CultivoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Cultivo upsert
 */
export type CultivoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Cultivo to update in case it exists.
     */
    where: Prisma.CultivoWhereUniqueInput;
    /**
     * In case the Cultivo found by the `where` argument doesn't exist, create a new Cultivo with this data.
     */
    create: Prisma.XOR<Prisma.CultivoCreateInput, Prisma.CultivoUncheckedCreateInput>;
    /**
     * In case the Cultivo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CultivoUpdateInput, Prisma.CultivoUncheckedUpdateInput>;
};
/**
 * Cultivo delete
 */
export type CultivoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Cultivo to delete.
     */
    where: Prisma.CultivoWhereUniqueInput;
};
/**
 * Cultivo deleteMany
 */
export type CultivoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Cultivos to delete
     */
    where?: Prisma.CultivoWhereInput;
    /**
     * Limit how many Cultivos to delete.
     */
    limit?: number;
};
/**
 * Cultivo.gastos
 */
export type Cultivo$gastosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Cultivo.bitacoras
 */
export type Cultivo$bitacorasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Cultivo without action
 */
export type CultivoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Cultivo.d.ts.map