import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page-header',
  imports: [RouterLink],
  templateUrl: './main-page-header.component.html',
  styleUrl: './main-page-header.component.scss'
})
export class MainPageHeaderComponent {
  status = sessionStorage.getItem('status');
}
