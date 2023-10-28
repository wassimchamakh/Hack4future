import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSideMenuComponent } from './student-side-menu.component';

describe('StudentSideMenuComponent', () => {
  let component: StudentSideMenuComponent;
  let fixture: ComponentFixture<StudentSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSideMenuComponent]
    });
    fixture = TestBed.createComponent(StudentSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
