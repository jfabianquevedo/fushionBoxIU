import { Component, OnInit } from '@angular/core';
import { planes } from 'src/app/_model/planes';
import { PlanesService } from './../../../_service/planes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css'],
  providers: [planes]
})
export class PlanesComponent implements OnInit {

  planesForm: FormGroup;

  constructor(
private planesService: PlanesService,
private planes: planes

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
          console.log("guardado")
        }
      );
    }

    crearformularioPlanes(){
      this.planesForm = new FormGroup({
        idPlan: new FormControl(),
        nombre: new FormControl(),
        precio: new FormControl(),
        duracion: new FormControl()
      });
    }
}
