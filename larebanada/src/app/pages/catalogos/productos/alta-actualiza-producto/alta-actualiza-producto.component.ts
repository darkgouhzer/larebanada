import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { Unidadesmedida } from '../../../../interfaces/unidadesmedida';
import { ProductoService } from '../../../../services/producto.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConsultaProductosComponent } from '../consulta-productos/consulta-productos.component';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-alta-actualiza-producto',
  templateUrl: './alta-actualiza-producto.component.html',
  styleUrls: ['./alta-actualiza-producto.component.css'],
})
export class AltaActualizaProductoComponent implements OnInit {

  unidadesMedida: Unidadesmedida[]=[{
    id:0,
    nombre:'',
    simbolo:'',
  }];
   
  objProducto:Producto={
    id:undefined,
    nombre:'',
    precio:0,
    valormedida:0,
    idunidadesmedida:0,
  }

  constructor(private producto:ProductoService, public dialog: MatDialog) {     
  }

  @ViewChild('consultaProductosTemplate') customTemplate!: TemplateRef<any>;
  ngOnInit(): void {
    this.ObtenerUnidadesMedida();   
  }

  buscarProductos(): void {
    
    let dialogRef = this.dialog.open(this.customTemplate, {
      width: "750px",
      // data: {name: "LOGIN", animal: this.animal }
      
    });

    let instance = dialogRef;
    
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ObtenerUnidadesMedida():void{
    
      this.producto.getUnidadesMedida().subscribe(response =>{
        console.log(response);
        this.unidadesMedida = response.data;
      });
  }

  GuardarProducto():void{
    console.log(this.objProducto);
    this.producto.altaProducto(this.objProducto).subscribe(response =>{
      console.log(response);
    });
  }

  ObtenerProducto():void{
    console.log("ObtenerProducto");
   
    if(this.objProducto.id != undefined){
      this.producto.getProductoById( this.objProducto.id ).subscribe(response =>{
        console.log(response);
        if(response.data !=null){
          this.objProducto = response.data;
        }else{
          this.ResetProducto();
        }
        
      });
    }  
  }
  ResetProducto():void{
    this.objProducto={
      id:0,
      nombre:'',
      precio:0,
      valormedida:0,
      idunidadesmedida:0,
    }
  }
}
