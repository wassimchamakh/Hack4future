import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantHomePageComponent } from './enseignant-home-page.component';

describe('EnseignantHomePageComponent', () => {
  let component: EnseignantHomePageComponent;
  let fixture: ComponentFixture<EnseignantHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnseignantHomePageComponent]
    });
    fixture = TestBed.createComponent(EnseignantHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
