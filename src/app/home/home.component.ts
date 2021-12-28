import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = true;
  productos:any = []

  constructor(
    private productosService:ProductosService
  ) {
    this.getProducts();
  } 

  getProducts = async () => {
    this.productos = await this.productosService.getAllPromise()
    // console.log(this.productos)
    this.loading=false;
  }

  ngOnInit(): void { 
  }

}
