import { Component } from '@angular/core';
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { FormGroup, FormControlName, FormControl } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-page',
  imports: [ShopPageHeaderComponent, ],
  templateUrl: './verify-page.component.html',
  styleUrl: './verify-page.component.scss'
})
export class VerifyPageComponent {

  constructor(private http: HttpServiceService, private router: Router) {}

  verifyForm = new FormGroup({
    email: new FormControl(''),
  })

  triedVerification!: boolean;
  emailVerified!: boolean;

  onSubmit() {
    let formValue = this.verifyForm.value;
    this.http.verifyUser(formValue).subscribe(
      (response) => {
        this.triedVerification = true;
        this.emailVerified = true;
        let stringVerify = this.emailVerified.toString();
        localStorage.setItem('verification', stringVerify);
      },
      (error) => {
        this.triedVerification = false;
        this.emailVerified = false;
        let stringVerify = this.emailVerified.toString();
        localStorage.setItem('verification', stringVerify);
      }
    )
  }
}
