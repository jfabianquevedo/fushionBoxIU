import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './registrar/inventario.component';

const routes: Routes = [
  {
    path: 'registrar', component: InventarioComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class InventarioRoutingModule { }
