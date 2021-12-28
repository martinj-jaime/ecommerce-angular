import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  loading = true;
  producto:any = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private productosService:ProductosService
  ) {

  }

  async ngOnInit() {
    try {
      let id = this.activatedRoute.snapshot.paramMap.get('id'); 
      // console.log(id);
  
      this.producto = await this.productosService.getById(id)
      // console.log(this.producto);
      this.loading=false;
    }
    catch (err) {
      console.log(err)
    }
  }

}