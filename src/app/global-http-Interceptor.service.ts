import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GlobalHTTPInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Interceptor called");
    return next.handle(this.addHeaderKeyValue(request)).pipe(
      catchError((error)=>{
            console.log('Error in Intercept!');
            console.log(error.errorMessage);
            return throwError(()=> new error(error.errorMessage))
      })
    );
  }
  
  addHeaderKeyValue(request:HttpRequest<any>){
    console.log("Interceptor header called");
    return request.clone({
      headers: request.headers.set('Content-Type','application/json; charset=utf-8')
      //.set('X-RapidAPI-Key','ce97f5eb51mshdb46062da54e149p18bb64jsn192cf76b348f')
      .set('X-RapidAPI-Key','b122d31478msh9bf629361a212b0p1b1723jsn54b05d0a96fa')
      .set('X-RapidAPI-Host','dad-jokes.p.rapidapi.com')
    })
  }
}
