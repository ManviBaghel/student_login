import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentForgotpswdComponent } from './student-forgotpswd.component';

describe('StudentForgotpswdComponent', () => {
  let component: StudentForgotpswdComponent;
  let fixture: ComponentFixture<StudentForgotpswdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentForgotpswdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentForgotpswdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
