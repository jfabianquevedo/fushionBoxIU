import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanesRoutingModule } from './planes-routing.module';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanesComponent } from './registrar/planes.component';

@NgModule({
  declarations: [
    PlanesComponent
  ],
  imports: [
CommonModule,
    PlanesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PlanesModule { }
