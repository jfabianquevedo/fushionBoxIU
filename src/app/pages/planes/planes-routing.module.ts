import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanesComponent } from './registrar/planes.component';

const routes: Routes = [
  {
    path: 'registrar', component: PlanesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class PlanesRoutingModule { }
