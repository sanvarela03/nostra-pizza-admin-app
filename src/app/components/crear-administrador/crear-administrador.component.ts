import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from '../../models/administrador';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css'],
})
export class CrearAdministradorComponent implements OnInit {
  administrador: Administrador = new Administrador('', '');

  constructor(private service: AdministradorService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    console.log('u: ' + this.administrador.username);
    console.log('p: ' + this.administrador.password);

    this.service.create(this.administrador).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }
}
