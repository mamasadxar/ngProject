import { Component } from '@angular/core';
import { MainPageHeaderComponent } from '../main-page-header/main-page-header.component';
import { MainPageSection1Component } from '../main-page-section1/main-page-section1.component';
import { MainPageSection2Component } from '../main-page-section2/main-page-section2.component';
import { MainPageSection3Component } from '../main-page-section3/main-page-section3.component';
import { MainPageSection4Component } from "../main-page-section4/main-page-section4.component";
import { MainPageSection5Component } from '../main-page-section5/main-page-section5.component';
import { MainPageSection6Component } from '../main-page-section6/main-page-section6.component';

@Component({
  selector: 'app-main-page',
  imports: [MainPageHeaderComponent, MainPageSection1Component, MainPageSection2Component, MainPageSection3Component, MainPageSection4Component, MainPageSection5Component, MainPageSection6Component],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
