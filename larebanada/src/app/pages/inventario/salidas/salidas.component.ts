import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.component.html',
  styleUrls: ['./salidas.component.css']
})
export class SalidasComponent implements OnInit {
  //borrar este objeto
  foods: Food[] = [
    {value: 'sucursal-0', viewValue: 'La Trinidad'},
    {value: 'sucursal-1', viewValue: 'Guasave'},
    {value: 'sucursal-2', viewValue: 'Los Mochis'},
    {value: 'sucursal-3', viewValue: 'Estación Naranjo'}
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