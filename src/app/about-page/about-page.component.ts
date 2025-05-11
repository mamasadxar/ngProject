import { Component } from '@angular/core';
import { MainPageHeaderComponent } from "../main-page-header/main-page-header.component";
import { AboutPageSection1Component } from "../about-page-section1/about-page-section1.component";
import { AboutPageSection2Component } from '../about-page-section2/about-page-section2.component';
import { AboutPageSection3Component } from '../about-page-section3/about-page-section3.component';
import { MainPageSection8Component } from "../main-page-section8/main-page-section8.component";
import { MainPageSection7Component } from '../main-page-section7/main-page-section7.component';
import { MainPageFooterComponent } from "../main-page-footer/main-page-footer.component";

@Component({
  selector: 'app-about-page',
  imports: [MainPageHeaderComponent, AboutPageSection1Component, AboutPageSection2Component, AboutPageSection3Component, MainPageSection8Component, MainPageSection7Component, MainPageFooterComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
