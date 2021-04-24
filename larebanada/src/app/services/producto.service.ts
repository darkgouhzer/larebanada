import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Producto } from '../interfaces/producto';
import { Unidadesmedida } from '../interfaces/unidadesmedida';
import { Responses } from '../interfaces/responses';
import { environment as env } from '../../environments/environment';
import { Productosfilter } from '../interfaces/productosfilter';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiProductoAltaUrl = env.apiUrl+'/producto';
  private apiUnidadesMedidaUrl = env.apiUrl+'/unidades/medida';
  private apiProductoById = env.apiUrl+'/producto/id';
  private apiProductoEliminar= env.apiUrl+'/producto/eliminar';
  private apiProductoByDesc = env.apiUrl+'/producto/nombre/desc-';
  
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

  getProductoById(id:number):Observable<Responses<Producto>>{
    return this.http.get<Producto>(this.apiProductoById+'/'+id,this.httpOptions).pipe(
      tap((producto: Producto)  => this.log(`get Producto`)),
      catchError(this.handleError<any>('obtener Producto por id')) 
    );
  }

  getProductoByDesc(desc:string):Observable<Responses<Productosfilter[]>>{
    // console.log(this.apiProductoByDesc+desc);
    return this.http.get<Productosfilter>(this.apiProductoByDesc+desc,this.httpOptions).pipe(
      tap((productos: Productosfilter)  => this.log(`get Producto by desc`)),
      catchError(this.handleError<any>('get Producto by desc')) 
    );
  }

  eliminarProductoById(id:number):Observable<Responses<Producto>>{
    return this.http.get<Producto>(this.apiProductoEliminar+'/'+id,this.httpOptions).pipe(
      tap((producto: Producto)  => this.log(`Eliminar Producto`)),
      catchError(this.handleError<any>('Eliminar Producto')) 
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
