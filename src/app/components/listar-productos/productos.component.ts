import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private service: ProductoService) {}

  ngOnInit(): void {
    this.onGetAll();
  }

  onGetAll(): void {
    this.service.getAll().subscribe((data) => {
      this.productos = data;
    });
  }
}
