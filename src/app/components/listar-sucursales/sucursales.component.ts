import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/models/sucursal';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  sucursales: Sucursal[] = [];

  constructor(private service : SucursalService) { }

  ngOnInit(): void {
    this.onGetAll()
  }

  onGetAll(): void {
    this.service.getAll().subscribe((data) => {
        this.sucursales = data;
        console.log(this.sucursales);
    })
  }

}
