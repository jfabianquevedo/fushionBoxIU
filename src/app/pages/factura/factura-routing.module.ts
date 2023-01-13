import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from '../factura/registrar/factura.component';
import { ListarComponent } from './listar/listar.component';
const routes: Routes = [
  {
    path: 'registrar', component: FacturaComponent
  },
  {
    path: 'listar', component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class FacturaRoutingModule { }
