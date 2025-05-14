import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MainPageHeaderComponent } from "../main-page-header/main-page-header.component";
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, MainPageHeaderComponent, ShopPageHeaderComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
	registrationForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
	})

}
