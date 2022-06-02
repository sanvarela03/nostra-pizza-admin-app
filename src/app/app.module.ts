import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradoresComponent } from './components/consultar-administradores/administradores.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CrearAdministradorComponent } from './components/crear-administrador/crear-administrador.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './components/consultar-administrador/consultar-administrador.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministradoresComponent,
    CrearAdministradorComponent,
    HeaderComponent,
    HomeAdministradorComponent,
    ConsultarAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
