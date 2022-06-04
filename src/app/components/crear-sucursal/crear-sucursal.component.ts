import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from 'src/app/models/sucursal';
import { Ubicacion } from 'src/app/models/ubicacion';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css'],
})
export class CrearSucursalComponent implements OnInit {
  sucursal: Sucursal = new Sucursal();
  ubicacion: Ubicacion = new Ubicacion();

  constructor(private service: SucursalService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    this.sucursal.ubicacion = this.ubicacion;
    console.log(this.sucursal);

    this.service.create(this.sucursal).subscribe((data) => {
      console.log('SUCURSAL: ' + data.nombre + 'CREADA');
        this.router.navigate(['/home/1'])
    });
  }
}
