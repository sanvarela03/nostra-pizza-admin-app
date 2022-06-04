import { Pedido } from "./pedido";
import { Producto } from "./producto";

export class PedidoProducto {
    id!: number;
    cantidadProducto!: number;
    pedido!:Pedido;
    producto!: Producto;

}
