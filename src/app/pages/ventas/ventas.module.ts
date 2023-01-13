import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { VentasComponent } from './registrar/ventas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    VentasComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class VentasModule { }
