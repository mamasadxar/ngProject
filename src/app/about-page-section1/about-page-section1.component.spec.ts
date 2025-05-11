import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageSection1Component } from './about-page-section1.component';

describe('AboutPageSection1Component', () => {
  let component: AboutPageSection1Component;
  let fixture: ComponentFixture<AboutPageSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
