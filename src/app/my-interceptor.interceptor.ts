import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (sessionStorage.getItem("token")!=null){

      //new HttpHeaders().set('Authorization', 'Basic ' + window.btoa(sessionStorage.getItem("username") + ':' + sessionStorage.getItem("password")))
      let cnx='Bearer ' + sessionStorage.getItem("token");

      request = request.clone({// on récupère la requête et on ajoute dans le header la partie autorisation
        setHeaders: {
          Authorization:cnx
        }
        
      });
    };


    return next.handle(request);
  }
}
