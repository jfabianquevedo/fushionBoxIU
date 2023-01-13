import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaRoutingModule } from './factura-routing.module';
import { MaterialModule } from './../../material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaComponent } from './registrar/factura.component';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    FacturaComponent,
    ListarComponent
  ],
  imports: [
CommonModule,
    FacturaRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FacturaModule { }
