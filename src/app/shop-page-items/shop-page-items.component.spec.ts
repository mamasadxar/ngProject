import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPageItemsComponent } from './shop-page-items.component';

describe('ShopPageItemsComponent', () => {
  let component: ShopPageItemsComponent;
  let fixture: ComponentFixture<ShopPageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPageItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
