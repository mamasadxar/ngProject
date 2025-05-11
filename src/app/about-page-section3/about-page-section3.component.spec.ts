import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageSection3Component } from './about-page-section3.component';

describe('AboutPageSection3Component', () => {
  let component: AboutPageSection3Component;
  let fixture: ComponentFixture<AboutPageSection3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageSection3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageSection3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
