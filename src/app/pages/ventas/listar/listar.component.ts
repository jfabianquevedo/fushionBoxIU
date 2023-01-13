import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ventas } from 'src/app/_model/Ventas';
import { VentasService } from 'src/app/_service/Ventas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Ventas>;
  cargando:boolean = false;
  displayedColumns = [
    'cliente',
    'fechaPago',
    'fechaInicio',
    "tipoPago",
    "estadoPago",
    "inventario"
  ];
  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.ventasService.listar().subscribe((data) =>{
      this.crearTabla(data)
    })
  }

  crearTabla(data: Ventas[]) {
    this.dataSource = new MatTableDataSource(data);
    // aca se colocan las columnas para aplicar el filtro
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.cliente.identificacion + data.cliente.nombres + data.cliente.apellidos;
      return dataStr.indexOf(filter) != -1;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
