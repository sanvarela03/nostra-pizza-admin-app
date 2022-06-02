import { Component, OnInit } from '@angular/core';
import { AdministradorService } from './administrador.service';
import { Administrador } from './administrador';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {
  titulo = "administrador login"
  administradores: Administrador[] = []
  constructor(private service: AdministradorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.service.getAll().subscribe(
      (data) => {
          this.administradores=data;
      }
    );
    
  }
}