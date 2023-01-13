import { Injectable } from '@angular/core';
import { Planes } from '../_model/Planes';
import { genericService } from './generic.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class planesService extends genericService<Planes> {

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/planes`)
     }
}
