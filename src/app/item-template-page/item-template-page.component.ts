import { Component } from '@angular/core';
import { ShopPageComponent } from "../shop-page/shop-page.component";
import { ShopPageHeaderComponent } from "../shop-page-header/shop-page-header.component";
import { ActivatedRoute, Router, RouterLink, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-item-template-page',
  imports: [ShopPageHeaderComponent, RouterLink],
  templateUrl: './item-template-page.component.html',
  styleUrl: './item-template-page.component.scss'
})
export class ItemTemplatePageComponent {
	constructor(private route: ActivatedRoute) { }

	name?: string;
	currentPrice?: number;
	currency?: string;
	description?: string;
	image?: string;
	category?: string;

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

