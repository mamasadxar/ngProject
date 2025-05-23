import { Component } from '@angular/core';
import { ShopPageHeaderComponent } from '../shop-page-header/shop-page-header.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ShopPageHeaderComponent, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
	constructor(private http: HttpServiceService, private router: Router) { }

	successfullLogin = false;
	loggedIn = false;

	emailVerified = false;

	accessToken = undefined;
	refreshToken = undefined;


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
				this.accessToken = response.access_token;
				this.refreshToken = response.refresh_token;
				localStorage.setItem('access_token', response.access_token);
				localStorage.setItem('refresh_token', response.refresh_token);
				sessionStorage.setItem('status', `${this.loggedIn}`);
				this.router.navigate(['/home']);
			},
			(error) => {
				console.log('vershexvedimgelo', error);
			}
		)
		this.loginForm.reset();
	}
}
