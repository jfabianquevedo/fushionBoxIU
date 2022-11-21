import { Component, OnInit } from '@angular/core';
import { FacturasService } from 'src/app/_service/facturas.service';
import { facturas } from './../../_model/facturas';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from './../../_service/cliente.service';
import { planes } from 'src/app/_model/planes';
import { Cliente } from './../../_model/Cliente';
import { PlanesService } from './../../_service/planes.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [facturas]
})
export class FacturaComponent implements OnInit {

  facturaForm: FormGroup;
  listaPlanes: planes[];
  listaCliente: Cliente[];
  myFilter;

  constructor(
    private facturaService: FacturasService,
    private factura: facturas,
    private clienteService: ClienteService,
    private planesService: PlanesService
  ) { }

  ngOnInit(): void {
    this.clienteService.listar().subscribe((clientes) => {
      console.log(clientes)
      this.listaCliente = clientes
    })

    this.planesService.listar().subscribe((planes) =>{
      this.listaPlanes = planes
    })
    this.crearformularioFacturas()

  }

  crearformularioFacturas(){
    this.facturaForm = new FormGroup({
      Cliente: new FormControl(),
      plan: new FormControl(),
      observacion: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      fechaPago: new FormControl(),
      cantidadClases: new FormControl(),
      recibidoPor: new FormControl(),
      tipoPago: new FormControl()
    });
  }

  registrarFactura(){
    let cliente = new Cliente()[''];
    let plan = new planes()[''];
    cliente = this.listaCliente.filter((cl) => cl.id === this.facturaForm.value['Cliente'])
    plan = this.listaPlanes.filter((pl) => pl.idPlan === this.facturaForm.value['plan'])

      this.factura.cliente = cliente[0]
      this.factura.plan = plan[0]
      this.factura.observacion = this.facturaForm.value['observacion']
      this.factura.fechaInicio = this.facturaForm.value['fechaInicio']
      this.factura.fechaFin = this.facturaForm.value['fechaFin']
      this.factura.fechaPago = this.facturaForm.value['fechaPago']
      this.factura.cantidadClases = this.facturaForm.value['cantidadClases']
      this.factura.recibidoPor = this.facturaForm.value['recibidoPor']
      this.factura.tipoPago = this.facturaForm.value['tipoPago']
     
      console.log(this.factura);
      
        this.facturaService.registrar(this.factura).subscribe(
          response => {
            console.log("guardado")
          }
        );
  }

    // no permite seleccion una fecha mayor a hoy
    filtroFechas() {
      this.myFilter = (d: Date | null): boolean => {
        const fecha = d || new Date();
        return fecha < new Date();
      };
    }

}
