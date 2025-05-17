import { Component, viewChild, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { ShopPageComponent } from "../shop-page/shop-page.component";
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { ActivatedRoute, Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { MainPageFooterComponent } from "../main-page-footer/main-page-footer.component";

@Component({
  selector: 'app-item-template-page',
  imports: [ShopPageHeaderComponent, RouterLink, MainPageFooterComponent],
  templateUrl: './item-template-page.component.html',
  styleUrl: './item-template-page.component.scss'
})
export class ItemTemplatePageComponent {
	@ViewChild('descriptionBtn') descriptionBtn!: ElementRef;
	@ViewChild('reviewsBtn') reviewsBtn!: ElementRef;

	constructor(private route: ActivatedRoute, private renderer: Renderer2) { }

	name?: string;
	currentPrice?: number;
	currency?: string;
	description?: string;
	image?: string;
	category?: string;

	descriptionOrRating: boolean = true;

	descriptionFunction() {
		this.descriptionOrRating = true;
		this.renderer.setStyle(this.descriptionBtn.nativeElement, 'borderTop', '3px solid #de453e');
		this.renderer.setStyle(this.reviewsBtn.nativeElement, 'borderTop', '3px solid white');
	}
	rateFunction() {
		this.descriptionOrRating = false;		
		this.renderer.setStyle(this.reviewsBtn.nativeElement, 'borderTop', '3px solid #de453e');
		this.renderer.setStyle(this.descriptionBtn.nativeElement, 'borderTop', '3px solid white');
	}

	ngOnInit(): void {
	this.route.queryParams.subscribe(params => {
		this.name = params['name'];
		this.currentPrice = params['currentPrice'];
		this.currency = params['currency'];
		this.description = params['description'];
		this.image = params['image'];
		this.category = params['category'];
	});
}
}

