import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DatagridviewComponent } from 'src/app/components/grid/datagridview/datagridview.component';
import { Productosfilter } from 'src/app/interfaces/productosfilter';
import { ProductoService } from 'src/app/services/producto.service';
import { GridColumns } from '../../../../interfaces/grid-columns';

@Component({
  selector: 'app-consulta-productos',
  templateUrl: './consulta-productos.component.html',
  styleUrls: ['./consulta-productos.component.css']
})
export class ConsultaProductosComponent implements OnInit {

  constructor(private productos:ProductoService) {
    this.columnasProductos = [{title:"id",colname:"Código",type:""},
                              {title:"nombre",colname:"Descripcion",type:""},
                              {title:"precio",colname:"Precio",type:""},
                              {title:"simbolo",colname:"Unidad de medida",type:""}];
      this.searchByDesc = "";
      this.ngElevationClass = "mat-elevation-z8";
      //this.paginator = undefined;
  }

  @ViewChild(DatagridviewComponent) paginator!: DatagridviewComponent;
  @Input() ngElevationClass:string;
  columnasProductos:GridColumns[];
  dataSource = new MatTableDataSource<Productosfilter>();
  searchByDesc:string;
  ngOnInit(): void {
   this.ConsultarProductos(this.searchByDesc);
  }

  ConsultarProductos(searchProduct:string):void{
    this.productos.getProductoByDesc( searchProduct ).subscribe(response =>{
      console.log(response);
      const ELEMENT_DATA = response.data;
      this.dataSource = new MatTableDataSource<Productosfilter>(ELEMENT_DATA);  
      this.paginator.pagination();
    });
  }

}