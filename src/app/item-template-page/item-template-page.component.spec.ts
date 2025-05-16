import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTemplatePageComponent } from './item-template-page.component';

describe('ItemTemplatePageComponent', () => {
  let component: ItemTemplatePageComponent;
  let fixture: ComponentFixture<ItemTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTemplatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
