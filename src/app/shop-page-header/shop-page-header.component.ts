import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-shop-page-header',
  imports: [RouterLink],
  templateUrl: './shop-page-header.component.html',
  styleUrl: './shop-page-header.component.scss'
})
export class ShopPageHeaderComponent {
  status = sessionStorage.getItem('status');
}