import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection1Component } from './main-page-section1.component';

describe('MainPageSection1Component', () => {
  let component: MainPageSection1Component;
  let fixture: ComponentFixture<MainPageSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
