import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/_service/Ventas.service';
import { Cliente } from '../../../_model/Cliente';
import { UtilService } from '../../../_service/Util.service';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ClienteService } from '../../../_service/Cliente.service';
import { inventario } from '../../../_model/Inventario';
import { InventarioService } from '../../../_service/Inventario.service';
import { Ventas } from 'src/app/_model/Ventas';
import { TipoPago } from 'src/app/enums/TipoPago';
import { EstadoPago } from 'src/app/enums/EstadoPago';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
  providers: [Cliente, Ventas]
})
export class VentasComponent implements OnInit {

  ventasForm: FormGroup;
  listaUsuarios: Cliente[];
  listaUsuariosFilter: Cliente[];
  listaProductos: inventario[];
  myFilter;
  tipoPago = Object.keys(TipoPago).filter((v) => isNaN(Number(v)));
  estadoPago = Object.keys(EstadoPago).filter((v) => isNaN(Number(v)));

  constructor(
    private ventasService: VentasService,
    private clienteService: ClienteService,
    private utilService: UtilService,
    private inventarioService: InventarioService,
    private ventas: Ventas
  ) { }

  ngOnInit(): void {
    this.crearformularioCliente()
    this.getProductos()
    this.clienteService.listar().subscribe((data) => {
      this.listaUsuarios = data
      this.listaUsuariosFilter = data
    })
  }

  registrar() {
    var cliente = new Cliente()
    var listInventario = this.createListInventario(this.ventasForm.value['productos'])
    cliente.idCliente = this.ventasForm.value['cliente'].idCliente
    this.ventas.cliente = cliente
    this.ventas.cantidad = this.ventasForm.value['cantidad']
    this.ventas.estadoPago = this.ventasForm.value['estadoPago']
    this.ventas.fechaInicio = this.ventasForm.value['fechaInicio']
    this.ventas.fechaPago = this.ventasForm.value['fechaPago']
    this.ventas.tipoPago = this.ventasForm.value['tipoPago']
    this.ventas.inventario = listInventario
  this.ventasService.registrar(this.ventas).subscribe(
    response => {
      this.utilService.mostrarMensaje('VENTA REGISTRADO CORRECTAMENTE',environment.exitoso,environment.exitoso);
      setTimeout(() => {
        this.ventasForm.reset();
      }, 500);
    }
  );
   }

  crearformularioCliente() {
    this.ventasForm = new FormGroup({
      cliente: new FormControl(''),
      fechaPago: new FormControl(),
      fechaInicio: new FormControl(),
      tipoPago: new FormControl(),
      estadoPago: new FormControl(),
      productos: new FormControl(),
      cantidad: new FormControl()
    });

    this.ventasForm.get('cliente').valueChanges.subscribe(
      response => {
        this._filter(response)
      }
    )
  }

  private _filter(value: any) {
    var nombres = typeof value == 'string' ? value : value?.nombres
    this.listaUsuariosFilter = this.listaUsuarios.filter(cliente =>
      cliente.nombres.toLowerCase().includes(nombres.toLowerCase()))
  }

  getname(option) {
    return option.nombres;
  }

  getProductos(){
    this.inventarioService.listar().subscribe(data =>
      this.listaProductos = data)
  }

  createListInventario(productos: string[]){
    var listProductos: inventario[] = new Array();
    productos.forEach ( (producto) =>{
      var inv = new inventario();
      inv.idInventario = parseInt(producto);
      listProductos.push(inv);
    })
    return listProductos
  }

}
