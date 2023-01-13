import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('../clientes/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('../ventas/ventas.module').then(m => m.VentasModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('../inventario/inventario.module').then(m => m.InventarioModule)
  },
  {
    path: 'planes',
    loadChildren: () => import('../planes/planes.module').then(m => m.PlanesModule)
  },
  {
    path: 'factura',
    loadChildren: () => import('../factura/factura.module').then(m => m.FacturaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
