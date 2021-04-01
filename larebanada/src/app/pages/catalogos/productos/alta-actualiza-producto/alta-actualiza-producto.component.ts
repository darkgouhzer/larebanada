import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { Unidadesmedida } from '../../../../interfaces/unidadesmedida';
import { ProductoService } from '../../../../services/producto.service';

@Component({
  selector: 'app-alta-actualiza-producto',
  templateUrl: './alta-actualiza-producto.component.html',
  styleUrls: ['./alta-actualiza-producto.component.css']
})
export class AltaActualizaProductoComponent implements OnInit {

  unidadesMedida: Unidadesmedida[]=[{
    id:0,
    nombre:'',
    simbolo:'',
  }];
   
  objProducto:Producto={
    id:0,
    nombre:'',
    precio:0,
    valormedida:0,
    idunidadesmedida:0,
  }

  constructor(private producto:ProductoService) { }

  ngOnInit(): void {
    this.ObtenerUnidadesMedida();   
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
}
