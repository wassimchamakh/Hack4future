import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideMenuComponent } from './admin-side-menu.component';

describe('AdminSideMenuComponent', () => {
  let component: AdminSideMenuComponent;
  let fixture: ComponentFixture<AdminSideMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSideMenuComponent]
    });
    fixture = TestBed.createComponent(AdminSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
