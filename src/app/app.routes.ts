import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'signup', component: SignUpComponent }
];
