import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ventas } from '../_model/Ventas';
import { genericService } from './generic.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ventasService extends genericService<Ventas> {

  constructor(protected http: HttpClient)  {
    super(
      http,`${environment.HOST}/ventas`)
     }
}
