import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'home', component: MainPageComponent},
];
