import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | Prisma.EnumRolFieldRefInput<$PrismaModel>;
    in?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRolFilter<$PrismaModel> | $Enums.Rol;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | Prisma.EnumRolFieldRefInput<$PrismaModel>;
    in?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRolFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRolFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type EnumTipoCultivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCultivo | Prisma.EnumTipoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel> | $Enums.TipoCultivo;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumEstadoCultivoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCultivo | Prisma.EnumEstadoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel> | $Enums.EstadoCultivo;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumTipoCultivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCultivo | Prisma.EnumTipoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoCultivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCultivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumEstadoCultivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCultivo | Prisma.EnumEstadoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoCultivoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCultivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type EnumEstadoVentaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVenta | Prisma.EnumEstadoVentaFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel> | $Enums.EstadoVenta;
};
export type EnumEstadoVentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVenta | Prisma.EnumEstadoVentaFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoVentaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoVenta;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel>;
};
export type EnumCategoriaGastoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaGasto | Prisma.EnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel> | $Enums.CategoriaGasto | null;
};
export type EnumCategoriaGastoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaGasto | Prisma.EnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCategoriaGastoNullableWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaGasto | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel>;
};
export type EnumActividadBitacoraFilter<$PrismaModel = never> = {
    equals?: $Enums.ActividadBitacora | Prisma.EnumActividadBitacoraFieldRefInput<$PrismaModel>;
    in?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel> | $Enums.ActividadBitacora;
};
export type EnumActividadBitacoraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActividadBitacora | Prisma.EnumActividadBitacoraFieldRefInput<$PrismaModel>;
    in?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActividadBitacoraWithAggregatesFilter<$PrismaModel> | $Enums.ActividadBitacora;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | Prisma.EnumRolFieldRefInput<$PrismaModel>;
    in?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRolFilter<$PrismaModel> | $Enums.Rol;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | Prisma.EnumRolFieldRefInput<$PrismaModel>;
    in?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Rol[] | Prisma.ListEnumRolFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRolFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRolFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedEnumTipoCultivoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCultivo | Prisma.EnumTipoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel> | $Enums.TipoCultivo;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumEstadoCultivoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCultivo | Prisma.EnumEstadoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel> | $Enums.EstadoCultivo;
};
export type NestedEnumTipoCultivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoCultivo | Prisma.EnumTipoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoCultivo[] | Prisma.ListEnumTipoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoCultivoWithAggregatesFilter<$PrismaModel> | $Enums.TipoCultivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoCultivoFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumEstadoCultivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCultivo | Prisma.EnumEstadoCultivoFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoCultivo[] | Prisma.ListEnumEstadoCultivoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoCultivoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCultivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEstadoCultivoFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedEnumEstadoVentaFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVenta | Prisma.EnumEstadoVentaFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel> | $Enums.EstadoVenta;
};
export type NestedEnumEstadoVentaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoVenta | Prisma.EnumEstadoVentaFieldRefInput<$PrismaModel>;
    in?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.EstadoVenta[] | Prisma.ListEnumEstadoVentaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumEstadoVentaWithAggregatesFilter<$PrismaModel> | $Enums.EstadoVenta;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEstadoVentaFilter<$PrismaModel>;
};
export type NestedEnumCategoriaGastoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaGasto | Prisma.EnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel> | $Enums.CategoriaGasto | null;
};
export type NestedEnumCategoriaGastoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaGasto | Prisma.EnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    in?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.CategoriaGasto[] | Prisma.ListEnumCategoriaGastoFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumCategoriaGastoNullableWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaGasto | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCategoriaGastoNullableFilter<$PrismaModel>;
};
export type NestedEnumActividadBitacoraFilter<$PrismaModel = never> = {
    equals?: $Enums.ActividadBitacora | Prisma.EnumActividadBitacoraFieldRefInput<$PrismaModel>;
    in?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel> | $Enums.ActividadBitacora;
};
export type NestedEnumActividadBitacoraWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActividadBitacora | Prisma.EnumActividadBitacoraFieldRefInput<$PrismaModel>;
    in?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ActividadBitacora[] | Prisma.ListEnumActividadBitacoraFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumActividadBitacoraWithAggregatesFilter<$PrismaModel> | $Enums.ActividadBitacora;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumActividadBitacoraFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map