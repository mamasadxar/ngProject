import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSection6Component } from './main-page-section6.component';

describe('MainPageSection6Component', () => {
  let component: MainPageSection6Component;
  let fixture: ComponentFixture<MainPageSection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSection6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
