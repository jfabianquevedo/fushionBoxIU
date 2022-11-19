import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../_model/Cliente';
import { ClienteService } from './../../_service/cliente.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [Cliente]
})
export class ClientesComponent implements OnInit {

  clientesForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private cliente: Cliente,
  ) { }

  ngOnInit(): void {
    this.crearformularioCliente()
  }

  registrar(){
this.cliente.identificacion = this.clientesForm.value['identificacion']
this.cliente.nombres = this.clientesForm.value['nombres']
this.cliente.apellidos = this.clientesForm.value['apellidos']
this.cliente.direccion = this.clientesForm.value['direccion']
this.cliente.edad = this.clientesForm.value['edad']
this.cliente.estatus = true

console.log(this.cliente);


  this.clienteService.registrar(this.cliente).subscribe(
    response => {
      console.log("guardado")
    }
  );
}

crearformularioCliente(){
  this.clientesForm = new FormGroup({
    identificacion: new FormControl(),
    nombres: new FormControl(),
    apellidos: new FormControl(),
    direccion: new FormControl(),
    edad: new FormControl(),
  });
}

}
