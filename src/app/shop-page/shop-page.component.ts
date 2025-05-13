import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { HttpServiceService } from '../http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop-page',
  imports: [HttpClientModule],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  providers: [HttpServiceService],
})
export class ShopPageComponent {
  products: Product[];

  constructor(public http: HttpClient, public httpService: HttpServiceService) {
    this.products = [];
  }

  ngOnInit() {
    this.httpService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
    
  }
}
