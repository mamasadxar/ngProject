import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
	registrationForm = new FormGroup({
		username: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
	})

	onSubmit() {
		
	}
}
