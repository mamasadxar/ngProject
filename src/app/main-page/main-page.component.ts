import { Component } from '@angular/core';
import { MainPageHeaderComponent } from '../main-page-header/main-page-header.component';
import { MainPageSection1Component } from '../main-page-section1/main-page-section1.component';
import { MainPageSection2Component } from '../main-page-section2/main-page-section2.component';

@Component({
  selector: 'app-main-page',
  imports: [MainPageHeaderComponent, MainPageSection1Component, MainPageSection2Component],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
