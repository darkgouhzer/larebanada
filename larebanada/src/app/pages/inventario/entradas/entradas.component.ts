import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
  //borrar este objeto
  foods: Food[] = [
    {value: 'repostera-0', viewValue: 'Maria lopez lopez'},
    {value: 'repostera-1', viewValue: 'Berenice Castro Chavira'},
    {value: 'repostera-2', viewValue: 'Regina Zavala Haro'},
    {value: 'repostera-3', viewValue: 'Sulema Bojorquez'}
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