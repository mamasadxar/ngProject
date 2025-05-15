import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from './shop-page-items/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  public productsUrl = 'https://api.everrest.educata.dev/shop/products';
    
  constructor(private http: HttpClient) { }
  
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=10`);
  }
   
  postData(data: any): Observable<any> {
    return this.http.post("https://api.everrest.educata.dev/auth/sign_up", data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post('https://api.everrest.educata.dev/auth/sign_in', data);
  }
}

