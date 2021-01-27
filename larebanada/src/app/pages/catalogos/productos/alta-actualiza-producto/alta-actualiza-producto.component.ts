import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-actualiza-producto',
  templateUrl: './alta-actualiza-producto.component.html',
  styleUrls: ['./alta-actualiza-producto.component.css']
})
export class AltaActualizaProductoComponent implements OnInit {
  
  //borrar este objeto
  foods: Food[] = [
    {value: 'pieza-0', viewValue: 'Pieza (pz)'},
    {value: 'Litro-1', viewValue: 'Litros (L)'},
    {value: 'Gramos', viewValue: 'Gramos (gr)'},
    {value: 'Kilos-2', viewValue: 'Kilos (kg)'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

//borrar esta interface
interface Food {
  value: string;
  viewValue: string;
}