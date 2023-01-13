import { Injectable } from '@angular/core';
import { Planes } from '../_model/Planes';
import { GenericService } from './Generic.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanesService extends GenericService<Planes> {

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/planes`)
     }
}
