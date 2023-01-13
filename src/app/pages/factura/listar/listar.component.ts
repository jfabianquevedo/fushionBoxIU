import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Facturas } from './../../../_model/Facturas';
import { FacturasService } from 'src/app/_service/Facturas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Facturas>;
  cargando:boolean = false;
  enum = ['NEQUI','BANCOLOMBIA','DAVIPLATA']
  displayedColumns = [
    'identificacion',
    'nombres',
    'apellidos',
    "plan",
    "fechaInicio",
    "fechaFin",
    "recibidoPor",
    "tipoPago",
    "facturas"
  ];
  constructor(
    private facturaService: FacturasService
    ) { }

  ngOnInit(): void {
    this.facturaService.listar().subscribe((data) =>{
      this.crearTabla(data)
    })
  }

  crearTabla(data: Facturas[]) {
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

  descargarFactura(factura: Facturas){
    this.cargando = true
    this.facturaService.descargarFactura(factura.idFactura).subscribe(
      data => {
        const url = window.URL.createObjectURL(data);
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        document.body.appendChild(a);
        a.href = url;
        a.download = `${factura.idFactura}_${factura.cliente.nombres}_${factura.cliente.apellidos}.pdf`;
        a.click();
        this.cargando = false
      }
     )
  }
}
