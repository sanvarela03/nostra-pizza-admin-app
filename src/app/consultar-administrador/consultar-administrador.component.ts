import { Component, OnInit } from '@angular/core';
import { LoginAdministrador } from '../modelo/login-administrador';
import { AdministradorService } from '../administradores/administrador.service';
import { Administrador } from '../administradores/administrador';

@Component({
  selector: 'app-consultar-administrador',
  templateUrl: './consultar-administrador.component.html',
  styleUrls: ['./consultar-administrador.component.css']
})
export class ConsultarAdministradorComponent implements OnInit {


  loginAdministrador : LoginAdministrador = new LoginAdministrador();

  administrador : Administrador = new Administrador("NaN","NaN")
  constructor(private service : AdministradorService) { }

  ngOnInit(): void {

  }

  onGet() : void {
    this.service.get(this.loginAdministrador).subscribe(
      (data) => {
        this.administrador = data
      }
    );
  }

}
