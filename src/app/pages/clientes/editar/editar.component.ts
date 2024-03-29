import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cliente } from './../../../_model/Cliente';
import { clienteService } from '../../../_service/cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente

  constructor(private dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Cliente,
    private clienteService: clienteService) { }

  ngOnInit(): void {
    this.cliente = { ...this.data };
  }
  Confirmar() {
    this.cerrar();
  }

  cerrar(aceptar?: number) {
    this.dialogRef.close();
  }
}
