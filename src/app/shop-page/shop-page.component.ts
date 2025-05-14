import { Component } from '@angular/core';

import { HttpServiceService } from '../http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { ShopPageItemsComponent } from "../shop-page-items/shop-page-items.component";

@Component({
  selector: 'app-shop-page',
  imports: [HttpClientModule, ShopPageHeaderComponent, ShopPageItemsComponent],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss',
  providers: [HttpServiceService],
})
export class ShopPageComponent {

}
