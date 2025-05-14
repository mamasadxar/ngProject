import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPageHeaderComponent } from './shop-page-header.component';

describe('ShopPageHeaderComponent', () => {
  let component: ShopPageHeaderComponent;
  let fixture: ComponentFixture<ShopPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
