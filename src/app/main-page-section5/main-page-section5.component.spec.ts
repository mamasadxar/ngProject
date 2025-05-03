import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection5Component } from './main-page-section5.component';

describe('MainPageSection5Component', () => {
  let component: MainPageSection5Component;
  let fixture: ComponentFixture<MainPageSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
