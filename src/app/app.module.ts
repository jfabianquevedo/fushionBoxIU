import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BuscarClienteComponent } from './pages/clientes/buscar/buscar-cliente.component';
import { ListarClientesComponent } from './pages/clientes/listar/listar-clientes.component';
import { ServerErrorsInterceptor } from './shared/Server-errors.interceptor';
import { MainComponent } from './pages/main/main/main.component';
import { NgMaterialMultilevelMenuModule,MultilevelMenuService } from 'ng-material-multilevel-menu';
import { MaterialModule } from './material/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    BuscarClienteComponent,
    ListarClientesComponent,
    MainComponent
  ],
  imports: [
  BrowserModule,
  NgMaterialMultilevelMenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi: true
  }, MultilevelMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
