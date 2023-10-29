import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationCalendrierComponent } from './administration-calendrier.component';

describe('AdministrationCalendrierComponent', () => {
  let component: AdministrationCalendrierComponent;
  let fixture: ComponentFixture<AdministrationCalendrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrationCalendrierComponent]
    });
    fixture = TestBed.createComponent(AdministrationCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
