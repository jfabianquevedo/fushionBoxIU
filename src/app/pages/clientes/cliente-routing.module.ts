import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './registrar/clientes.component';
import { ListarClientesComponent } from './listar/listar-clientes.component';

const routes: Routes = [
  {
    path: 'registrar', component: ClientesComponent
  },
/*  {
    path: 'listar', component: ListarClientesComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ClienteRoutingModule { }
