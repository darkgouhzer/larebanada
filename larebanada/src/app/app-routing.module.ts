import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './pages/catalogos/productos/productos.component';
import { ReposterasComponent } from './pages/catalogos/reposteras/reposteras.component';
import { SucursalesComponent } from './pages/catalogos/sucursales/sucursales.component';
import { EntradasComponent } from './pages/inventario/entradas/entradas.component';
import { SalidasComponent } from './pages/inventario/salidas/salidas.component';
import { ReporteEntradasComponent } from './pages/reportes/reporte-entradas/reporte-entradas.component';
import { ReporteSalidasComponent } from './pages/reportes/reporte-salidas/reporte-salidas.component';
import { InventarioComponent } from './pages/reportes/inventario/inventario.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AltaActualizaProductoComponent } from './pages/catalogos/productos/alta-actualiza-producto/alta-actualiza-producto.component';
import { ConsultaProductosComponent } from './pages/catalogos/productos/consulta-productos/consulta-productos.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'productos-altas', component: AltaActualizaProductoComponent },
  { path: 'productos-consultas', component: ConsultaProductosComponent },
  { path: 'reposteras', component: ReposterasComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'entradas', component: EntradasComponent },
  { path: 'salidas', component: SalidasComponent },
  { path: 'reporte/entradas', component: ReporteEntradasComponent },
  { path: 'reporte/salidas', component: ReporteSalidasComponent },
  { path: 'reporte/inventario', component: InventarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});
