import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MainPageHeaderComponent } from "../main-page-header/main-page-header.component";
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, ShopPageHeaderComponent, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
	constructor(private http: HttpServiceService) {}
	successfullRegistration = false;

	registrationForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		age: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
		address: new FormControl(''),
		phone: new FormControl(''),
		zipcode: new FormControl(''),
		avatar: new FormControl(''),
		gender: new FormControl(''),
	})

	onSubmit() {
		let formValue = this.registrationForm.value;

		this.http.postData(formValue).subscribe(
			(response) => {
				console.log('gaigzavnaAMGELOOOO', response);
				this.successfullRegistration = true;
			},
			(error) => {
				console.log('azzearxar', error)
			}	
		)
		this.registrationForm.reset()
	}
}
