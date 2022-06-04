import { Ubicacion } from "./ubicacion";

export class Sucursal {
    id!:number;
    nombre!:string;
    costoEnvioKM!:number;
    horaDeApertura!:string;
    horaDeCierre!:string;
    ubicacion!:Ubicacion;
    isOpen!:boolean;
}
