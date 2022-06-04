import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { TipoDeProducto } from 'src/app/models/tipo-de-producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {

  producto: Producto = new Producto();
  tipoDeProducto: TipoDeProducto = new TipoDeProducto();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductoService
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }


  onLoad(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      this.service.get(id).subscribe((data) => {
        this.producto = data;
        if (data.tipoDeProducto) {
          this.tipoDeProducto = this.producto.tipoDeProducto;
        }

      })

    });
  }

  onUpdate(): void {
    this.producto.tipoDeProducto = this.tipoDeProducto;

    console.log(this.producto);
    this.service.update(this.producto).subscribe((data) => {
      this.router.navigate(['/home/1']);
    })

  }


}
