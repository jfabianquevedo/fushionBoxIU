import { Cliente } from './Cliente';
import { EstadoPago } from '../enums/EstadoPago';
import { TipoPago } from '../enums/TipoPago';
import { inventario } from './Inventario';

export class Ventas {
	idVenta: number;
	cliente: Cliente;
	fechaPago: String;
	fechaInicio: String;
	tipoPago: TipoPago;
	estadoPago: EstadoPago;
	inventario: inventario[];
	cantidad: number;
}