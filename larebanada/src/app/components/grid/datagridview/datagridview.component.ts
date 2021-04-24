import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GridColumns } from '../../../interfaces/grid-columns';

@Component({
  selector: 'app-datagridview',
  templateUrl: './datagridview.component.html',
  styleUrls: ['./datagridview.component.css']
})
export class DatagridviewComponent implements AfterViewInit  {

  constructor( private cdRef: ChangeDetectorRef ) {
    this.showSearch =true;
    this.columns = [];
    this.columnsToDisplay = [];
    this.dataSource = new MatTableDataSource();
    this.txtSearch="";
    this.resultsLength=0;
    this.ngClassElevation="mat-elevation-z0";
    //this.paginator = new MatPaginator();
   }

  // displayedColumns: string[] = ['codigo', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  columnsToDisplay: string[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() txtSearch: string;
  @Input() ngClassElevation: string;
  @Input() showSearch: boolean;
  @Input() columns:GridColumns[];
  @Input() dataSource:MatTableDataSource<any>;

  @Output() newSearchEvent = new EventEmitter<string>();

  resultsLength:number;

  ngAfterViewInit() {
    
    console.log(this.columns);
    let col = this.columns.slice
    console.log(col);     
    this.columnsToDisplay = Object.keys(this.columns).map((key:any) => this.columns[key].title).slice();
    this.dataSource.paginator = this.paginator;
    this.cdRef.detectChanges(); 
  }

  searchProduct(searchProduct:string) {    
    this.dataSource = new MatTableDataSource();
    this.resultsLength = this.dataSource.data.length;
    this.newSearchEvent.emit(searchProduct);    
    
    this.cdRef.detectChanges();  
  }
  handlePageEvent(event: PageEvent) {
    this.dataSource.paginator = this.paginator;
    this.cdRef.detectChanges(); 
  }

  applyFilter(value: string) {
    const filterValue = value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  selectioRow($event:Event):void{
    console.log($event);
  }
  
 
  pagination() {    
    // this.dataSource.paginator = this.paginator;
    let interval = setInterval(()=>{
      console.log(this.dataSource);
      if(this.dataSource.data.length != this.resultsLength){
        this.dataSource.paginator = this.paginator;
        this.resultsLength = this.dataSource.data.length;
        this.stopInterval(interval);
      }
    },500);

    // setTimeout(()=>this.dataSource.paginator = this.paginator,1000);
    this.cdRef.detectChanges(); 
  }
  stopInterval(interval:any):void{
    clearInterval(interval);
  }
}


