import { Injectable } from '@angular/core';
import { inventario } from '../_model/Inventario';
import { HttpClient } from '@angular/common/http';
import { genericService } from './generic.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class inventarioService extends genericService<inventario> {

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/inventario`)
     }
}
