import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../shop-page-items/product.model';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-page-items',
  imports: [],
  templateUrl: './shop-page-items.component.html',
  styleUrl: './shop-page-items.component.scss'
})
export class ShopPageItemsComponent {
    product: Product[] = [];
    imenaProduct: Array<any>[] = [];

  constructor(public http: HttpClient, public httpService: HttpServiceService, public router: Router) { }

  ngOnInit() {
    this.httpService.getAllProducts().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct)
      this.product = this.imenaProduct[4][1];
      console.log(this.product)
    });
  }

  firstPage() {
    this.httpService.getAllProducts().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct);
      this.product = this.imenaProduct[4][1];
      console.log(this.product);
    });
  }

  secondPage() {
    this.httpService.itemsPageTwo().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct);
      this.product = this.imenaProduct[4][1];
      console.log(this.product);
    });
  }

  thirdPage() {
    this.httpService.itemsPageThree().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct);
      this.product = this.imenaProduct[4][1];
      console.log(this.product);
    });
  }

  fourthPage() {
    this.httpService.itemsPageFour().subscribe((data) => {
      this.imenaProduct = Object.entries(data);
      console.log(this.imenaProduct);
      this.product = this.imenaProduct[4][1];
      console.log(this.product);
    });
  }

  goToItemPage(name: string, currentPrice: number, currency: string, description: string, image: string, category: string) {
    this.router.navigate(['/template'], {
      queryParams: { name, currentPrice, currency, description, image, category },
    })
  }
}