import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProspectComponent } from './gestion-prospect.component';

describe('GestionProspectComponent', () => {
  let component: GestionProspectComponent;
  let fixture: ComponentFixture<GestionProspectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProspectComponent]
    });
    fixture = TestBed.createComponent(GestionProspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
