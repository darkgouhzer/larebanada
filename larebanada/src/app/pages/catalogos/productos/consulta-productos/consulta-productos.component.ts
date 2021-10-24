import { Component, Input, OnInit, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatagridviewComponent } from 'src/app/components/grid/datagridview/datagridview.component';
import { Productosfilter } from 'src/app/interfaces/productosfilter';
import { ProductoService } from 'src/app/services/producto.service';
import { GridColumns } from '../../../../interfaces/grid-columns';

import {HttpClient} from '@angular/common/http';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-consulta-productos',
  templateUrl: './consulta-productos.component.html',
  styleUrls: ['./consulta-productos.component.css']
})
export class ConsultaProductosComponent implements OnInit {

  // constructor(private productos:ProductoService) {
    // this.columnasProductos = [{title:"id",colname:"Código",type:""},
    //                           {title:"nombre",colname:"Descripcion",type:""},
    //                           {title:"precio",colname:"Precio",type:""},
    //                           {title:"simbolo",colname:"Unidad de medida",type:""}];
    //   this.searchByDesc = "";
    //   this.ngElevationClass = "mat-elevation-z8";
      //this.paginator = undefined;
  // }

  // @ViewChild(DatagridviewComponent) paginator!: DatagridviewComponent;
  // @Input() ngElevationClass:string;
  // columnasProductos:GridColumns[];
  // dataSource = new MatTableDataSource<Productosfilter>();
  // searchByDesc:string;
  ngOnInit(): void {
  //  this.ConsultarProductos(this.searchByDesc);
  }

  // ConsultarProductos(searchProduct:string):void{
  //   this.productos.getProductoByDesc( searchProduct ).subscribe(response =>{
  //     console.log(response);
  //     const ELEMENT_DATA = response.data;
  //     this.dataSource = new MatTableDataSource<Productosfilter>(ELEMENT_DATA);  
  //     this.paginator.pagination();
  //   });
  // }

  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  // exampleDatabase: ExampleHttpDatabase | null =null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private _httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // this.data = new MatTableDataSource();
    // this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // merge(this.sort.sortChange, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       return this.exampleDatabase!.getRepoIssues(
    //           this.sort.active, this.sort.direction, this.paginator.pageIndex)
    //         .pipe(catchError(() => observableOf(null)));
    //     }),
    //     map(data => {
    //       // Flip flag to show that loading has finished.
    //       this.isLoadingResults = false;
    //       this.isRateLimitReached = data === null;

    //       if (data === null) {
    //         return [];
    //       }

    //       // Only refresh the result length if there is new data. In case of rate
    //       // limit errors, we do not want to reset the paginator to zero, as that
    //       // would prevent users from re-triggering requests.
    //       this.resultsLength = data.total_count;
    //       return data.items;
    //     })
    //   ).subscribe(data => this.data = data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
// export class ExampleHttpDatabase {
//   constructor(private _httpClient: HttpClient) {}

//   getRepoIssues(sort: string, order: SortDirection, page: number): Observable<GithubApi> {
//     const href = 'https://api.github.com/search/issues';
//     const requestUrl =
//         `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

//     return this._httpClient.get<GithubApi>(requestUrl);
//   }
// }