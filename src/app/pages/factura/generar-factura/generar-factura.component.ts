import { Component, OnInit } from '@angular/core';
import { FacturasService } from './../../../_service/facturas.service';

@Component({
  selector: 'app-generar-factura',
  templateUrl: './generar-factura.component.html',
  styleUrls: ['./generar-factura.component.css']
})
export class GenerarFacturaComponent implements OnInit {


  constructor(private facturaService: FacturasService) { }

  ngOnInit(): void {
    let factura = this.facturaService.listarPorId(1).subscribe((data) =>{
      console.log(data);
    })
  }

}
