import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresComponent } from './components/administrador/listar-administradores/administradores.component';
import { CrearAdministradorComponent } from './components/administrador/crear-administrador/crear-administrador.component';
import { HomeAdministradorComponent } from './components/administrador/home-administrador/home-administrador.component';
import { ConsultarAdministradorComponent } from './components/administrador/consultar-administrador/consultar-administrador.component';
import { CrearSucursalComponent } from './components/sucursal/crear-sucursal/crear-sucursal.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarSucursalComponent } from './components/sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';

const routes: Routes = [

  { path: '', redirectTo: '/administradores', pathMatch: 'full' },
  { path: 'administradores', component: AdministradoresComponent },
  { path: 'crear', component: CrearAdministradorComponent },
  { path: 'home/:id', component: HomeAdministradorComponent },
  { path: 'login', component: ConsultarAdministradorComponent },
  { path: 'crearSucursal', component: CrearSucursalComponent },
  { path: 'crearProducto', component: CrearProductoComponent },
  { path: 'actualizarSucursal/:id', component: ActualizarSucursalComponent },
  { path: 'actualizarProducto/:id', component: ActualizarProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
