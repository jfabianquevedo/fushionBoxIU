import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { inventario } from '../../../_model/Inventario';
import { inventarioService } from '../../../_service/inventario.service';
import { utilService } from '../../../_service/util.service';
import { environment } from 'src/environments/environment';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
  providers: [inventario]
})
export class InventarioComponent implements OnInit {

  inventarioForm: FormGroup;
  formattedAmount;
  constructor(private inventario: inventario,
    private inventarioService: inventarioService,
    private utilService: utilService) { }

  ngOnInit(): void {
   this.crearformularioInventario()
  }

  crearformularioInventario(){
    this.inventarioForm = new FormGroup({
      nombre: new FormControl(),
      cantidad: new FormControl(),
      valorUnitario: new FormControl(0,{ updateOn: 'blur' }),
      valorTotal: new FormControl(0,{ updateOn: 'blur' })
    });
  }

  registrar(){
    this.inventario.nombre = this.inventarioForm.value['nombre']
    this.inventario.cantidad = this.inventarioForm.value['cantidad']
    this.inventario.valorUnitario = this.inventarioForm.value['valorUnitario']
    this.inventario.valorTotal = this.inventarioForm.value['valorTotal']
    
      this.inventarioService.registrar(this.inventario).subscribe(
        response => {
          this.utilService.mostrarMensaje('PRODUCTO REGISTRADO CORRECTAMENTE',environment.exitoso,environment.exitoso);
          setTimeout(() => {
            this.inventarioForm.reset();
          }, 500);
        }
      );
    }
}
