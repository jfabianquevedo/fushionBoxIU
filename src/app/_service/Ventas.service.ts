import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ventas } from '../_model/Ventas';
import { GenericService } from './Generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentasService extends GenericService<Ventas> {

  constructor(protected http: HttpClient)  {
    super(
      http,`${environment.HOST}/ventas`)
     }
}
