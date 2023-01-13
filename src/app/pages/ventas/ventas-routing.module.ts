import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentasComponent } from './registrar/ventas.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {
    path: 'registrar', component: VentasComponent
  },
  {
    path: 'listar', component:ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class VentasRoutingModule { }
