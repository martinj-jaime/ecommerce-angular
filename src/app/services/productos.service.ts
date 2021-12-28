import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }

  getAllPromise() {
    return this.http.get('https://jsonfy.com/items').toPromise(); // promise
  }


  getById(id:any) {
    return this.http.get('https://jsonfy.com/items/'+id).toPromise(); 
  }


}
