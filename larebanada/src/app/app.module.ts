import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ReporteEntradasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
