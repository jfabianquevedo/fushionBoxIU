import { Injectable } from '@angular/core';
import { inventario } from '../_model/Inventario';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './Generic.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService extends GenericService<inventario> {

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/inventario`)
     }
}
