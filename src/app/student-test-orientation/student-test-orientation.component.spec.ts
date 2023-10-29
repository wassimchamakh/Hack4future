import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestOrientationComponent } from './student-test-orientation.component';

describe('StudentTestOrientationComponent', () => {
  let component: StudentTestOrientationComponent;
  let fixture: ComponentFixture<StudentTestOrientationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTestOrientationComponent]
    });
    fixture = TestBed.createComponent(StudentTestOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
