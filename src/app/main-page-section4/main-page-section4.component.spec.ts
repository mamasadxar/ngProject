import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection4Component } from './main-page-section4.component';

describe('MainPageSection4Component', () => {
  let component: MainPageSection4Component;
  let fixture: ComponentFixture<MainPageSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
