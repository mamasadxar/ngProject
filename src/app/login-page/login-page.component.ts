import { Component } from '@angular/core';
import { ShopPageHeaderComponent } from '../shop-page-header/shop-page-header.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login-page',
  imports: [ShopPageHeaderComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
	constructor(private http: HttpServiceService) { }

	successfullLogin = false;
	loggedIn = false;

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	})

	onSubmit() {
		let formValue = this.loginForm.value;

		this.http.loginUser(formValue).subscribe(
			(response) => {
				console.log('shexvediMgelo', response);
				this.successfullLogin = true;
				this.loggedIn = true;
			},
			(error) => {
				console.log('vershexvedimgelo', error);
			}
		)
	}
}
