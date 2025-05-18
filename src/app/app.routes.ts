import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ItemTemplatePageComponent } from './item-template-page/item-template-page.component';
import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'home', component: MainPageComponent},
    { path: 'shop', component: ShopPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'template', component: ItemTemplatePageComponent, },
    { path: 'cart', component: CartPageComponent },
    { path: 'profile', component: ProfilePageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { } 