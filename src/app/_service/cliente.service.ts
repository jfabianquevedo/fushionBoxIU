import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../_model/Cliente';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ClienteService extends GenericService<Cliente>{

private clienteCambio: Subject<Cliente[]> = new Subject<Cliente[]>();
private mensajeCambio: Subject<string> = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,`${environment.HOST}/cliente`)
     }

     getClienteCambio() {
      return this.clienteCambio.asObservable();
    }
  
    setClienteCambio(lista: Cliente[]) {
      this.clienteCambio.next(lista);
    }
  
    setMensajeCambio(mensaje: string){
      this.mensajeCambio.next(mensaje);
    }
  
    getMensajeCambio(){
      return this.mensajeCambio.asObservable();
    }

}
