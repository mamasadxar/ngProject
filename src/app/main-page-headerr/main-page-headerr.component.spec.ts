import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHeaderrComponent } from './main-page-headerr.component';

describe('MainPageHeaderrComponent', () => {
  let component: MainPageHeaderrComponent;
  let fixture: ComponentFixture<MainPageHeaderrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageHeaderrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageHeaderrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
