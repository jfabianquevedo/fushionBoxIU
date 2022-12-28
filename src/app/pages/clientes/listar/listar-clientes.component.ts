import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Cliente } from './../../../_model/Cliente';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClienteService } from './../../../_service/Cliente.service';
import { FormGroup } from '@angular/forms';
import { EditarComponent } from './../editar/editar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Cliente>;
  displayedColumns = [
    'identificacion',
    'nombres',
    'apellidos',
    "direccion",
    "celular",
    "correo"
  ];
  constructor( private detectorCambios: ChangeDetectorRef,
    private clienteService: ClienteService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
this.clienteService.listar().subscribe((data) =>{
  this.crearTabla(data)
})  
  }

  crearTabla(data: Cliente[]) {
    this.dataSource = new MatTableDataSource(data);
    // aca se colocan las columnas para aplicar el filtro
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.idCliente + data.nombres + data.apellidos;
      return dataStr.indexOf(filter) != -1;
    }
    this.clienteService.setDataSource(this.dataSource);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  abrirDialogo(cliente?: Cliente) {
    this.dialog.open(EditarComponent, {
      width: '850px',
      data: cliente,
    });
  }
}
