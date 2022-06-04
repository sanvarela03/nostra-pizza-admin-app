import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Sucursal } from 'src/app/models/sucursal';
import { Ubicacion } from 'src/app/models/ubicacion';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-actualizar-sucursal',
  templateUrl: './actualizar-sucursal.component.html',
  styleUrls: ['./actualizar-sucursal.component.css'],
})
export class ActualizarSucursalComponent implements OnInit {
  sucursal: Sucursal = new Sucursal();
  ubicacion: Ubicacion = new Ubicacion();
  
  productosDelCarrito : Producto[] = []
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: SucursalService
  ) {}

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(): void {
    console.log(this.ubicacion)
    this.activatedRoute.params.subscribe((params) => {
      let id = params['id'];
      if (id) {
        this.service.get(id).subscribe((data) => {
            this.sucursal = data;
            if(data.ubicacion){
              this.ubicacion = this.sucursal.ubicacion;
            }
            
        })
      }
    });
  }

  onUpdate(): void {
    console.log(this.sucursal);
    this.sucursal.ubicacion = this.ubicacion;

    this.service.update(this.sucursal).subscribe((data) =>{
      this.router.navigate(['/home/1']);
    });
  }

}
