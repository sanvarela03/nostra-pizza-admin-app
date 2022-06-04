import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { TipoDeProducto } from 'src/app/models/tipo-de-producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  //ATRIBTUOS
  constructor(private service: ProductoService, private router: Router) {}
  producto: Producto = new Producto();
  tipoDeProducto: TipoDeProducto = new TipoDeProducto();

  //METODOS
  ngOnInit(): void {}
  onCreate(): void {
    console.log(this.producto);
    console.log(this.tipoDeProducto);
    this.producto.tipoDeProducto = this.tipoDeProducto;
    console.log(this.producto);
    this.service.create(this.producto).subscribe((data) => {
      this.router.navigate(['/home/1']);
    });
  }
}
