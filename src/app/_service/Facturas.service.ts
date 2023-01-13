import { Injectable } from '@angular/core';
import { GenericService } from './Generic.service';
import { Facturas } from '../_model/Facturas';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService extends GenericService<Facturas> {

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/factura`)
     }

  descargarFactura(idFactura: number){
      return this.http.get(`${environment.HOST}/factura/generarReporte/${idFactura}`,{
        responseType: 'blob'
      });
    } 
}
