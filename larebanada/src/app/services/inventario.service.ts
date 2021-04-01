import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Entrada } from '../interfaces/entrada';
import { MessageService } from './message.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InventarioService{

  private apiEntradaUrl = 'http://localhost:8000/api/entrada';
  httpOptions = {
    headers: new HttpHeaders({'Authorization': `Bearer 8|Hqa37CkWLiBQBjvopB4krI22SMHuvGjyqlXUgUHo` })
  };

  
  form: FormGroup;

  constructor(private http:HttpClient, private messageService: MessageService, public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      avatar: [null]
    });
   }

  realizarEntrada(entrada: Entrada):Observable<Entrada>{
    return this.http.post<Entrada>(this.apiEntradaUrl, entrada, this.httpOptions).pipe(
      tap((newEntrada: Entrada)  => this.log(`entrada actualizada`)),
      catchError(this.handleError<any>('realizarEntrada')) 
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`inventario: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
