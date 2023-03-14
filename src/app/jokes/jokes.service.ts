import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Jokes } from './jokes-model';

@Injectable({
    providedIn: 'root',
   })

export class JokesService{
    private apiUrl = "https://dad-jokes.p.rapidapi.com/random/joke";
    
    constructor(private http: HttpClient){}

    getJokes(): Observable<any>{

        return this.http.get<any>(this.apiUrl)
            .pipe(
               catchError(this.handleError('',[]))     
            );

    }
   private errorHandler(error: HttpErrorResponse) {
        return Observable.bind(error.message || "server error.");
    }
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
      
          // TODO: send the error to remote logging infrastructure
          console.log(error); // log to console instead
          //throwError;
          //return Observable.throw(error.message || "server error.");
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}