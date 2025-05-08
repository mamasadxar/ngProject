import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection8Component } from './main-page-section8.component';

describe('MainPageSection8Component', () => {
  let component: MainPageSection8Component;
  let fixture: ComponentFixture<MainPageSection8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
