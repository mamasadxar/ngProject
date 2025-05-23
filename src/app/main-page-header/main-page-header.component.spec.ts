import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHeaderComponent } from './main-page-header.component';

describe('MainPageHeaderComponent', () => {
  let component: MainPageHeaderComponent;
  let fixture: ComponentFixture<MainPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
