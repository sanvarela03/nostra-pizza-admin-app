import { Component, OnInit } from '@angular/core';
import { LoginAdministrador } from '../../models/dto/login-administrador';
import { AdministradorService } from '../../services/administrador.service';
import { Administrador } from '../../models/administrador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-administrador',
  templateUrl: './consultar-administrador.component.html',
  styleUrls: ['./consultar-administrador.component.css'],
})
export class ConsultarAdministradorComponent implements OnInit {
  
  loginAdministrador: LoginAdministrador = new LoginAdministrador();

  administrador: Administrador = new Administrador('NaN', 'NaN');

  constructor(private service: AdministradorService, private route : Router) {}

  ngOnInit(): void {}

  onGet(): void {
    this.service.get(this.loginAdministrador).subscribe((data) => {
      this.administrador = data;

    });
  }
}
