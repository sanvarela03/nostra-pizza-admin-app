import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../../services/administrador.service';
import { Administrador } from '../../../models/administrador';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {
  titulo = "Listar administradores"
  administradores: Administrador[] = []
  constructor(private service: AdministradorService) { }

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll(): void{
    this.service.getAll().subscribe(
      (data) => {
          this.administradores=data;
      }
    );
    
  }
}