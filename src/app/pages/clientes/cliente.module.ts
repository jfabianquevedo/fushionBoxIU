import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ClientesComponent } from './registrar/clientes.component';
import { EditarComponent } from './editar/editar.component';
import { ListarPendientesComponent } from './listar-pendientes/listar-pendientes.component';

@NgModule({
  declarations: [
    ClientesComponent,
    EditarComponent,
    ListarPendientesComponent
  ],
  imports: [
  CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ClienteModule { }
