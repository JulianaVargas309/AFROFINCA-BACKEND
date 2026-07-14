export declare const Rol: {
    readonly ADMIN: "ADMIN";
    readonly FAMILIAR: "FAMILIAR";
    readonly CONSULTA: "CONSULTA";
};
export type Rol = (typeof Rol)[keyof typeof Rol];
export declare const TipoCultivo: {
    readonly CAFE: "CAFE";
    readonly CANA_AZUCAR: "CANA_AZUCAR";
};
export type TipoCultivo = (typeof TipoCultivo)[keyof typeof TipoCultivo];
export declare const EstadoCultivo: {
    readonly ACTIVO: "ACTIVO";
    readonly COSECHADO: "COSECHADO";
    readonly PERDIDO: "PERDIDO";
};
export type EstadoCultivo = (typeof EstadoCultivo)[keyof typeof EstadoCultivo];
export declare const ActividadBitacora: {
    readonly FERTILIZACION: "FERTILIZACION";
    readonly FUMIGACION: "FUMIGACION";
    readonly PODA: "PODA";
    readonly DESHIERBE: "DESHIERBE";
    readonly COSECHA: "COSECHA";
    readonly SIEMBRA: "SIEMBRA";
    readonly MANTENIMIENTO: "MANTENIMIENTO";
    readonly OTRO: "OTRO";
};
export type ActividadBitacora = (typeof ActividadBitacora)[keyof typeof ActividadBitacora];
export declare const CategoriaGasto: {
    readonly INSUMOS: "INSUMOS";
    readonly MANO_DE_OBRA: "MANO_DE_OBRA";
    readonly MANTENIMIENTO: "MANTENIMIENTO";
    readonly TRANSPORTE: "TRANSPORTE";
    readonly ADMINISTRACION: "ADMINISTRACION";
    readonly OTRO: "OTRO";
};
export type CategoriaGasto = (typeof CategoriaGasto)[keyof typeof CategoriaGasto];
export declare const EstadoVenta: {
    readonly PENDIENTE: "PENDIENTE";
    readonly COMPLETADA: "COMPLETADA";
    readonly ANULADA: "ANULADA";
};
export type EstadoVenta = (typeof EstadoVenta)[keyof typeof EstadoVenta];
//# sourceMappingURL=enums.d.ts.map