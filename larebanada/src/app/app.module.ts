import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

import { APP_ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './pages/catalogos/productos/productos.component';
import { ReposterasComponent } from './pages/catalogos/reposteras/reposteras.component';
import { SucursalesComponent } from './pages/catalogos/sucursales/sucursales.component';
import { EntradasComponent } from './pages/inventario/entradas/entradas.component';
import { SalidasComponent } from './pages/inventario/salidas/salidas.component';
import { InventarioComponent } from './pages/reportes/inventario/inventario.component';
import { ReporteSalidasComponent } from './pages/reportes/reporte-salidas/reporte-salidas.component';
import { ReporteEntradasComponent } from './pages/reportes/reporte-entradas/reporte-entradas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaActualizaProductoComponent } from './pages/catalogos/productos/alta-actualiza-producto/alta-actualiza-producto.component';
import { ConsultaProductosComponent } from './pages/catalogos/productos/consulta-productos/consulta-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    ProductosComponent,
    ReposterasComponent,
    SucursalesComponent,
    EntradasComponent,
    SalidasComponent,
    InventarioComponent,
    ReporteSalidasComponent,
    ReporteEntradasComponent,
    AltaActualizaProductoComponent,
    ConsultaProductosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,  
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'es-Mx'},],
  bootstrap: [AppComponent]
})
export class AppModule { }
