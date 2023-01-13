import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class utilService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  /**Metodo que se encarga de mostrar los mensaje de la app
   * param:
   *        mensaje: texto que se mostrara
   *        action: esta accion permite cambiar el css , esto se puede validar en el eviroment ( exitoso,error,aviso)
   *                si se quieren crear mas se debe agregan al enviroment y agregar si estilo en el styles.css
   *        cod: codigo de error, este campo se utiliza para el interceptador, para los componente se coloca la accion
   *
  */
   mostrarMensaje(mensaje: string, action: string, cod: string) {
    this.snackBar.open(mensaje, cod, {
      duration: environment.DURACION,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [action.toUpperCase().toString()]
    });
  }
  configMultilevelMenu() {
    return {
      paddingAtStart: true,
      interfaceWithRoute: true,
      classname: 'menuBack',
      istBackgroundColor: `rgb(253, 255, 255)`,
      fontColor: `rgb(8, 8, 8)`,
      backgroundColor: `rgb(253, 255, 255)`,
      selectedListFontColor: `rgb(0,139,255)`,
      highlightOnSelect: true,
      collapseOnSelect: true,
      useDividers: true,
      rtlLayout: false
    };
  }
}