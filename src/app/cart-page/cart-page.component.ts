import { Component } from '@angular/core';
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { HttpServiceService } from '../http-service.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  imports: [ShopPageHeaderComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  constructor(private http: HttpClient) {}
  cartArray: Array<any> = [];

  ngOnInit() {
    
  const accessToken = localStorage.getItem('access_token');
  const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    this.http.get('https://api.everrest.educata.dev/shop/cart', { headers }).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
  }
}
