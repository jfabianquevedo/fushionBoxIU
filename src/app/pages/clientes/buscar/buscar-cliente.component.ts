import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../../../_service/Cliente.service';
import { Cliente } from '../../../_model/Cliente';
import { MatPaginator } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.css']
})
export class BuscarClienteComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  value = '';
  displayedColumns = [
    'idCliente',
    'identificacion',
    'nombres',
    'apellidos',
    'direccion',
    'edad',
    'estatus',
    'factura',
    'acciones'
  ];
  dataSource: MatTableDataSource<Cliente>;
  constructor(
    private clienteService: ClienteService,
    private detectorCambios: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.clienteService.listar().subscribe((data) => {
      console.log(data);
      
      this.crearTabla(data)
    })
    // this.clienteService.getClienteCambio().subscribe((data) => {
    //   this.crearTabla(data);
    // });
  
  }

  crearTabla(data: Cliente[]) {
    this.dataSource = new MatTableDataSource(data);
    this.detectorCambios.detectChanges();
    this.dataSource.paginator = this.paginator
    // aca se colocan las columnas para aplicar el filtro
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.identificacion + data.nombres + data.apellidos + data.estatus;
      return dataStr.indexOf(filter) != -1;
    }
    this.clienteService.setDataSource(this.dataSource);
  }

 /* descargarFactura(cliente: Cliente) {
    this.clienteService.descargarFactura(cliente.id).subscribe(data => {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      a.setAttribute('style', 'display:none');
      document.body.appendChild(a);
      a.href = url;
      a.download = `${cliente.id}_${cliente.identificacion}_${cliente.nombres}_log.zip`;
      a.click();
    });
  }*/

  abrirDialogo(cliente?: Cliente) {


    // this.dialog.open(ModificarComponent, {
    //   width: '850px',
    //   data: solicitud,
    // });
  }

  filtrar(e: string) {
    this.dataSource.filter = e.toUpperCase();
  }

}
