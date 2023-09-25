import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAppelComponent } from './gestion-appel.component';

describe('GestionAppelComponent', () => {
  let component: GestionAppelComponent;
  let fixture: ComponentFixture<GestionAppelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionAppelComponent]
    });
    fixture = TestBed.createComponent(GestionAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
