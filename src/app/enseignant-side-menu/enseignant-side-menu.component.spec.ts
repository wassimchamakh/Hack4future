import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantSideMenuComponent } from './enseignant-side-menu.component';

describe('EnseignantSideMenuComponent', () => {
  let component: EnseignantSideMenuComponent;
  let fixture: ComponentFixture<EnseignantSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantSideMenuComponent]
    });
    fixture = TestBed.createComponent(EnseignantSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
