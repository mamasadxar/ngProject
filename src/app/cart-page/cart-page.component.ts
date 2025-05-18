import { Component } from '@angular/core';
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-cart-page',
  imports: [ShopPageHeaderComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  constructor(private http: HttpServiceService) {}
  cartArray: Array<any> = [];

  accessToken = localStorage.getItem('access_token');

  //   ngOnInit() {
  //   this.http.getCartItems().subscribe((data) => {
  //     this.cartArray = data;
  //     console.log(this.cartArray);
  //   });
  // }
}
