import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradoresComponent } from './administradores/administradores.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CrearAdministradorComponent } from './crear-administrador/crear-administrador.component';
import { HeaderComponent } from './header/header.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './consultar-administrador/consultar-administrador.component';


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
