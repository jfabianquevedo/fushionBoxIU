import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ClientesComponent } from './registrar/clientes.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    ClientesComponent,
    EditarComponent
  ],
  imports: [
  CommonModule,
    ClienteRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ClienteModule { }
