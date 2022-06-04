import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administrador.service';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css'],
})
export class HomeAdministradorComponent implements OnInit {
  administrador: Administrador = new Administrador('', '');

  constructor(
    private route: ActivatedRoute,
    private service: AdministradorService
  ) {}

  ngOnInit(): void {
    this.onLoadAdim();
  }

  onLoadAdim() {
    //const idAdmin = Number(this.route.snapshot.paramMap.get('id'));

    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.service.getById(id).subscribe((data) => {
        this.administrador = data;
      });
    });
  }
}
