import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradoresComponent } from './components/listar-administradores/administradores.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CrearAdministradorComponent } from './components/crear-administrador/crear-administrador.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './components/consultar-administrador/consultar-administrador.component';
import { AdministradorService } from './services/administrador.service';
import { ProductoService } from './services/producto.service';
import { ProductosComponent } from './components/listar-productos/productos.component';
import { SucursalesComponent } from './components/listar-sucursales/sucursales.component';
import { CrearSucursalComponent } from './components/crear-sucursal/crear-sucursal.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ActualizarSucursalComponent } from './components/actualizar-sucursal/actualizar-sucursal.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';

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
