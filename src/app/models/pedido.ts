import { MetodoDePago } from "./metodo-de-pago";
import { PedidoProducto } from "./pedido-producto";

export class Pedido {
    id!: number;
    fecha!: string; //PUEDEN HABER PROBLEMAS CON EL FORMATO DE FECHA
    calificacion!: string;
    MetodoDePago!: MetodoDePago;
    pedidosProductos!: PedidoProducto[];

}
