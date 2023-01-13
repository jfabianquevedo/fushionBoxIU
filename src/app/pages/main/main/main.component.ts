import { Component, OnInit } from '@angular/core';
import { utilService } from '../../../_service/util.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  config;
  appitems: any = [];

  constructor(public utilidades: utilService) { }

  ngOnInit(): void {
    this.config = this.utilidades.configMultilevelMenu();
    this.appitems = [{
      label: 'Registrar Usuarios',
      icon: 'check',
      link: 'home/cliente/registrar'
    },
    {
      label: 'Registrar Facturas',
      icon: 'check',
      link: 'home/factura/registrar'
    },
    {
      label: 'Registrar Inventario',
      icon: 'check',
      link: 'home/inventario/registrar'
    },
    {
      label: 'Registrar Venta',
      icon: 'check',
      link: 'home/ventas/registrar'
    },
    {
      label: 'Registrar Plan',
      icon: 'check',
      link: 'home/planes/registrar'
    },
    {
      label: 'Listar Ventas',
      icon: 'error',
      link: ''
    },
    {
      label: 'Proximos vencimientos',
      icon: 'error',
      link: ''
    },
    {
      label: 'Usuarios deshabilitados',
      icon: 'error',
      link: ''
    },
    {
      label: 'Listar Facturas',
      icon: 'check',
      link: 'home/factura/listar'
    },
    {
      label: 'Listar Inventario',
      icon: 'error',
      link: ''
    }
    ];
  }

  selectedItem($event) {
  }

}
