import { Component, OnInit } from '@angular/core';
import { Planes } from 'src/app/_model/Planes';
import { planesService } from '../../../_service/planes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { utilService } from '../../../_service/util.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css'],
  providers: [Planes]
})
export class PlanesComponent implements OnInit {

  planesForm: FormGroup;

  constructor(
private planesService: planesService,
private planes: Planes,
private utilService: utilService
  ) { }

  ngOnInit(): void {
    this.crearformularioPlanes()
  }

  registrarPlan(){
    this.planes.nombre = this.planesForm.value['nombre']
    this.planes.precio = this.planesForm.value['precio']
    this.planes.duracion = this.planesForm.value['duracion']    
      this.planesService.registrar(this.planes).subscribe(
        response => {
          this.utilService.mostrarMensaje('PLAN REGISTRADO CORRECTAMENTE',environment.exitoso,environment.exitoso);    
          setTimeout(() => {
            this.planesForm.reset();
          }, 500);
        }
      );
    }

    crearformularioPlanes(){
      this.planesForm = new FormGroup({
        idPlan: new FormControl(),
        nombre: new FormControl(),
        precio: new FormControl(0,{ updateOn: 'blur' }),
        duracion: new FormControl()
      });
    }
}
