import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InventarioComponent } from '../inventario/registrar/inventario.component';

@NgModule({
  declarations: [
    InventarioComponent
  ],
  imports: [
CommonModule,
    InventarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[CurrencyPipe]
})
export class InventarioModule { }
