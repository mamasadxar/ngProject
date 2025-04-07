import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection2Component } from './main-page-section2.component';

describe('MainPageSection2Component', () => {
  let component: MainPageSection2Component;
  let fixture: ComponentFixture<MainPageSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
