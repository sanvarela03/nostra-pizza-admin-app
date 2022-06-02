import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresComponent } from './administradores/administradores.component';
import { CrearAdministradorComponent } from './crear-administrador/crear-administrador.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './consultar-administrador/consultar-administrador.component';

const routes: Routes = [

  { path: '', redirectTo: '/administradores', pathMatch: 'full' },
  { path: 'administradores', component: AdministradoresComponent },
  { path: 'crear', component: CrearAdministradorComponent },
  { path: 'home', component: HomeAdministradorComponent },
  { path: 'login', component: ConsultarAdministradorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
