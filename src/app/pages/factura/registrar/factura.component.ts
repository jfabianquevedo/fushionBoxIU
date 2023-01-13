import { Component, OnInit } from '@angular/core';
import { facturasService } from 'src/app/_service/facturas.service';
import { Facturas } from '../../../_model/Facturas';
import { FormGroup, FormControl } from '@angular/forms';
import { clienteService } from '../../../_service/cliente.service';
import { Planes } from 'src/app/_model/Planes';
import { Cliente } from '../../../_model/Cliente';
import { planesService } from '../../../_service/planes.service';
import { utilService } from '../../../_service/util.service';
import { environment } from 'src/environments/environment';
import { TipoPago } from 'src/app/enums/TipoPago';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
  providers: [Facturas, Cliente]
})
export class FacturaComponent implements OnInit {

  facturaForm: FormGroup;
  listaPlanes: Planes[];
  listaCliente: Cliente[];
  listaUsuarios: Cliente[];
  listaUsuariosFilter: Cliente[];
  myFilter;
  tipoPago = Object.keys(TipoPago).filter((v) => isNaN(Number(v)));

  constructor(
    private facturaService: facturasService,
    private factura: Facturas,
    private clienteService: clienteService,
    private planesService: planesService,
    private utilService: utilService
  ) { }

  ngOnInit(): void {
    this.crearformularioFacturas()
    this.clienteService.listar().subscribe((data) => {
      this.listaUsuarios = data
      this.listaUsuariosFilter = data
    })

    this.planesService.listar().subscribe((planes) =>{
      this.listaPlanes = planes
    })
  }

  crearformularioFacturas(){
    this.facturaForm = new FormGroup({
      cliente: new FormControl(''),
      plan: new FormControl(),
      observacion: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      fechaPago: new FormControl(),
      cantidadClases: new FormControl(),
      recibidoPor: new FormControl(),
      tipoPago: new FormControl()
    });

    this.facturaForm.get('cliente').valueChanges.subscribe(
      response => {
        this._filter(response)
      }
    )
  }

  registrarFactura(){
    var cliente = new Cliente()
    var plan = new Planes()
    cliente.idCliente = this.facturaForm.value['cliente'].idCliente
    plan.idPlan = this.facturaForm.value['plan'] 
      this.factura.cliente = cliente
      this.factura.plan = plan
      this.factura.observacion = this.facturaForm.value['observacion']
      this.factura.fechaInicio = this.facturaForm.value['fechaInicio']
      this.factura.fechaFin = this.facturaForm.value['fechaFin']
      this.factura.fechaPago = this.facturaForm.value['fechaPago']
      this.factura.cantidadClases = this.facturaForm.value['cantidadClases']
      this.factura.recibidoPor = this.facturaForm.value['recibidoPor']
      this.factura.tipoPago = this.facturaForm.value['tipoPago']
        this.facturaService.registrar(this.factura).subscribe(
          response => {
            this.utilService.mostrarMensaje('FACTURA REGISTRADO CORRECTAMENTE',environment.exitoso,environment.exitoso);
            setTimeout(() => {
              this.facturaForm.reset();
            }, 500);
          }
        );
  }

getname(option) {
      return option.nombres;
    }


  private _filter(value: any) {
      var nombres = typeof value == 'string' ? value : value?.nombres
      this.listaUsuariosFilter = this.listaUsuarios.filter(cliente =>
        cliente.nombres.toLowerCase().includes(nombres.toLowerCase()))
    }

}
