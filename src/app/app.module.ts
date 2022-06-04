import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradoresComponent } from './components/administrador/listar-administradores/administradores.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CrearAdministradorComponent } from './components/administrador/crear-administrador/crear-administrador.component';
import { HeaderComponent } from './components/general/header/header.component';
import { HomeAdministradorComponent } from './components/administrador/home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './components/administrador/consultar-administrador/consultar-administrador.component';
import { AdministradorService } from './services/administrador.service';
import { ProductoService } from './services/producto.service';
import { ProductosComponent } from './components/producto/listar-productos/productos.component';
import { SucursalesComponent } from './components/sucursal/listar-sucursales/sucursales.component';
import { CrearSucursalComponent } from './components/sucursal/crear-sucursal/crear-sucursal.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarSucursalComponent } from './components/sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradoresComponent,
    CrearAdministradorComponent,
    HeaderComponent,
    HomeAdministradorComponent,
    ConsultarAdministradorComponent,
    ProductosComponent,
    SucursalesComponent,
    CrearSucursalComponent,
    CrearProductoComponent,
    ActualizarSucursalComponent,
    ActualizarProductoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AdministradorService, ProductoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
