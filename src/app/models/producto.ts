import { TipoDeProducto } from "./tipo-de-producto";

export class Producto {
    id!: number;
    nombre!: string;
    descripcion!: string;
    precio!: number;
    tiempoEstimadoDePreparacion!: number;
    tipoDeProducto!: TipoDeProducto;
}
