import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOrientationFormComponent } from './student-orientation-form.component';

describe('StudentOrientationFormComponent', () => {
  let component: StudentOrientationFormComponent;
  let fixture: ComponentFixture<StudentOrientationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentOrientationFormComponent]
    });
    fixture = TestBed.createComponent(StudentOrientationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
