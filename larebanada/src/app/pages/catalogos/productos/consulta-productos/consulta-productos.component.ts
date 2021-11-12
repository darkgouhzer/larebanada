import { Component, Input, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Productosfilter } from 'src/app/interfaces/productosfilter';
import { ProductoService } from 'src/app/services/producto.service';
import { GridColumns } from '../../../../interfaces/grid-columns';
import { Producto } from '../../../../interfaces/producto';

import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-consulta-productos',
  templateUrl: './consulta-productos.component.html',
  styleUrls: ['./consulta-productos.component.css']
})
export class ConsultaProductosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Producto>;
  //dataSource: DataTableDataSource;

  data: Producto[] = [];

  objServicio: ProductoService | undefined;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  filtro ="";
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','nombre', 'precio','valormedida'];

  constructor( private cdr: ChangeDetectorRef, private producto:ProductoService, private _httpClient: HttpClient, private messageService: MessageService) {
  }

  private getDataSource() {
    this.objServicio = new ProductoService(this._httpClient, this.messageService);
    
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator!.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.objServicio!.getProductoByDescPaginated(
            this.filtro, this.paginator!.pageIndex,this.paginator!.pageSize)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.data.total;
          console.log("this.resultsLength "+this.resultsLength);
          // this.data = data.data.items;
          // return this.getPagedData(this.getSortedData([...this.data ]));
          return data.data.items;
        })
      ).subscribe(data => this.data = data);
  }

  ngAfterViewInit(): void {
    this.getDataSource();
  }

  applyFilter(event: Event) {  
   
    
    const filterValue = (event.target as HTMLInputElement).value;
    //this.getDataSource(filterValue.trim().toLowerCase());
    this.filtro = filterValue.trim().toLowerCase();
    this.paginator._changePageSize(this.paginator.pageSize); 
  }
}
