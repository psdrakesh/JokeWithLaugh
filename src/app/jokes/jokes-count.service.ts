import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { JokesCount } from './jokes-count-model';

@Injectable({
  providedIn: 'root'
})

export class JokesCountService {
  private apiUrl = "https://dad-jokes.p.rapidapi.com/joke/count";

  constructor(private http: HttpClient) {   }

  getJokesCount():Observable<any>{
    return this.http.get<any>(this.apiUrl)
    .pipe(catchError(this.handleError('JokesCount',[])))
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
