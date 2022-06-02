import { Component, OnInit } from '@angular/core';
import { AdministradorService } from './administrador.service';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(private service: AdministradorService) { }

  ngOnInit(): void {
  }

}