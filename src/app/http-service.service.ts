import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './shop-page/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  public productsUrl = 'https://api.everrest.educata.dev/shop/products';
    
  constructor(private http: HttpClient) { }
  
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productsUrl}/all`);
  }
}
