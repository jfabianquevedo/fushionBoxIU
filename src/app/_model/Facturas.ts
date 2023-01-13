import { Cliente } from './Cliente';
import { Planes } from 'src/app/_model/Planes';
import { TipoPago } from '../enums/TipoPago';

export class Facturas{
    idFactura: number;
	cliente: Cliente;
	plan: Planes;
	observacion: string;
	fechaInicio: string;
	fechaFin: string;
	fechaPago: string;
	cantidadClases: number;
	recibidoPor: string;
	tipoPago: TipoPago;
}