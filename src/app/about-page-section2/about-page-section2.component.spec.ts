import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageSection2Component } from './about-page-section2.component';

describe('AboutPageSection2Component', () => {
  let component: AboutPageSection2Component;
  let fixture: ComponentFixture<AboutPageSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPageSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
