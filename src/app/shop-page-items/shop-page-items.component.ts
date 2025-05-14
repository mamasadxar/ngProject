import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../shop-page-items/product.model';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-shop-page-items',
  imports: [],
  templateUrl: './shop-page-items.component.html',
  styleUrl: './shop-page-items.component.scss'
})
export class ShopPageItemsComponent {
    product: Product[] = [];
    imenaProduct: Array<any>[] = [];

  constructor(public http: HttpClient, public httpService: HttpServiceService) { }

  ngOnInit() {

    this.httpService.getAllProducts().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct)
      this.product = this.imenaProduct[4][1];
      console.log(this.product)
    });
  }
}