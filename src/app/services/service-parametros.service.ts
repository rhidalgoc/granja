import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceParametrosService {

  constructor(private http:HttpClient) { }

  @Output() disparadorPararmetro: EventEmitter<any> = new EventEmitter();

  getProductos():Observable<any>{
    const url_productos = "../../assets/datos/productos.json";
   return this.http.get<any>(url_productos);
  }

  getAnimales():Observable<any>{
    const url_animales = "../../assets/datos/animales.json";
   return this.http.get<any>(url_animales);
  }
}
