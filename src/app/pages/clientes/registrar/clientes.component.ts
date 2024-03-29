import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../_model/Cliente';
import { clienteService } from '../../../_service/cliente.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms'
import { utilService } from '../../../_service/util.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [Cliente]
})
export class ClientesComponent implements OnInit {

  clientesForm: FormGroup;

  constructor(
    private clienteService: clienteService,
    private cliente: Cliente,
    private utilService: utilService
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
this.cliente.celular = this.clientesForm.value['celular']
this.cliente.correo = this.clientesForm.value['correo']
this.cliente.estatus = true
  this.clienteService.registrar(this.cliente).subscribe(
    response => {
      this.utilService.mostrarMensaje('CLIENTE REGISTRADO CORRECTAMENTE',environment.exitoso,environment.exitoso);
      setTimeout(() => {
        this.clientesForm.reset();
      }, 500);
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
    celular: new FormControl(),
    correo: new FormControl('', Validators.email),
  });
}

}
