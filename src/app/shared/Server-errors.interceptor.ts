import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, EMPTY, of } from 'rxjs';
import { tap, catchError, retry } from 'rxjs/operators';
import { utilService } from '../_service/util.service';

@Injectable({
  providedIn: 'root',
})
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(private utilService: utilService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(retry(environment.REINTENTOS)) // cuantas veces se intentara la conexion con el servicio
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            if (
              event.body &&
              event.body.error === true &&
              event.body.errorMessage
            ) {
              throw new Error(event.body.errorMessage);
            }
          }
        })
      )
      .pipe(
        catchError((err) => {
          console.log(JSON.stringify(err));
          let error = (err.error.error_description === undefined) ? err.error.mensaje : err.error.error_description;
          error = (error === undefined) ? err.message : error;

          if (err.error instanceof Blob) {
            let reader = new FileReader();
            reader.onload = (e: Event) => {
              const errmsg = JSON.parse((<any>e.target).result);
              this.utilService.mostrarMensaje(errmsg.mensaje, environment.Error, `ERROR ${err.status}`);
            };
            reader.readAsText(err.error);
          }
          else if (err.status === 400) {
            this.utilService.mostrarMensaje(error, environment.Error, `ERROR ${err.status}`);
          } else if (err.status === 404) {
            this.utilService.mostrarMensaje(error, environment.Error, `ERROR ${err.status}`);
          } else if (err.status === 403 || err.status === 401) {
            this.utilService.mostrarMensaje(error, environment.Error, `ERROR ${err.status}`);
          }
          else if (err.status === 0) {
            this.utilService.mostrarMensaje(error, environment.Error, 'ERROR CONECTION: ' + err.url);
          }
          else if (err.status === 500) {
            this.utilService.mostrarMensaje(error, environment.Error, `ERROR ${err.status}`);
          } else {
            this.utilService.mostrarMensaje(error, environment.Error, `ERROR GENERAL COD: ${err.status}`);
          }
          return EMPTY; // se retorna un vacio para cumplir el metodo
        })
      );
  }
}
