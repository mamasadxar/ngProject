import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection7Component } from './main-page-section7.component';

describe('MainPageSection7Component', () => {
  let component: MainPageSection7Component;
  let fixture: ComponentFixture<MainPageSection7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
