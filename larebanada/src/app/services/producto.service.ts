import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Producto } from '../interfaces/producto';
import { Unidadesmedida } from '../interfaces/unidadesmedida';
import { Responses } from '../interfaces/responses';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiProductoAltaUrl = 'http://localhost:8000/api/producto';
  private apiUnidadesMedidaUrl = 'http://localhost:8000/api/unidades/medida';
  httpOptions = {
    headers: new HttpHeaders({'Authorization': `Bearer 8|Hqa37CkWLiBQBjvopB4krI22SMHuvGjyqlXUgUHo` })
  };

  constructor(private http:HttpClient, private messageService: MessageService) { 

  }

  altaProducto(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.apiProductoAltaUrl, producto, this.httpOptions).pipe(
      tap((newEntrada: Producto)  => this.log(`entrada actualizada`)),
      catchError(this.handleError<any>('realizarEntrada')) 
    );
  }

  getUnidadesMedida():Observable<Responses<Unidadesmedida[]>>{
    return this.http.get<Unidadesmedida>(this.apiUnidadesMedidaUrl,this.httpOptions).pipe(
      tap((newEntrada: Unidadesmedida)  => this.log(`get unidades medida`)),
      catchError(this.handleError<any>('obtener unidades medida')) 
    );
  }

   /** Log a HeroService message with the MessageService */
   private log(message: string) {
    this.messageService.add(`producto: ${message}`);
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
