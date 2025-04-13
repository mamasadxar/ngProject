import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection3Component } from './main-page-section3.component';

describe('MainPageSection3Component', () => {
  let component: MainPageSection3Component;
  let fixture: ComponentFixture<MainPageSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
