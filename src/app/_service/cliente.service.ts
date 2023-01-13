import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cliente } from '../_model/Cliente';
import { GenericService } from './Generic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';



@Injectable({
  providedIn: 'root'
})

export class ClienteService extends GenericService<Cliente>{

private clienteCambio: Subject<Cliente[]> = new Subject<Cliente[]>();
private mensajeCambio: Subject<string> = new Subject<string>();
private dataSource: Subject<MatTableDataSource<Cliente>> = new Subject<MatTableDataSource<Cliente>>();


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

    setDataSource(dataSource:MatTableDataSource<Cliente>){
      this.dataSource.next(dataSource);
    }
  
    getDataSource(){
      return this.dataSource.asObservable();
    }


    

}
