import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailComponent } from './travail.component';

describe('TravailComponent', () => {
  let component: TravailComponent;
  let fixture: ComponentFixture<TravailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravailComponent]
    });
    fixture = TestBed.createComponent(TravailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
