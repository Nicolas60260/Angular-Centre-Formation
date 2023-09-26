import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommercialComponent } from './page-commercial.component';

describe('PageCommercialComponent', () => {
  let component: PageCommercialComponent;
  let fixture: ComponentFixture<PageCommercialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCommercialComponent]
    });
    fixture = TestBed.createComponent(PageCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
