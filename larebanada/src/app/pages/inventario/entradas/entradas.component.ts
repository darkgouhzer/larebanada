import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../../interfaces/entrada';
import { InventarioService } from '../../../services/inventario.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  //borrar este objeto
  foods: Food[] = [
    {value: '1', viewValue: 'Maria lopez lopez'},
    {value: '2', viewValue: 'Berenice Castro Chavira'},
    {value: '3', viewValue: 'Regina Zavala Haro'},
    {value: '4', viewValue: 'Sulema Bojorquez'}
  ];
  entrada:Entrada =  {
    cantidad :0,
    idproductos :0,
    idsucursales :1,
    idrepostera:0,
    users_id:1,
    catmotivoentradas_id:1,
};
  constructor(private inventario:InventarioService) { }

  ngOnInit(): void {
  }

  AgregarEntrada():void{
  
  
  console.log(this.entrada);

  this.inventario.realizarEntrada(this.entrada).subscribe(response =>{
    console.log(response);
  });
  


  }

}

//borrar esta interface
interface Food {
  value: string;
  viewValue: string;
}