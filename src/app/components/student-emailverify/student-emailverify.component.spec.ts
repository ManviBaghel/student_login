import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmailverifyComponent } from './student-emailverify.component';

describe('StudentEmailverifyComponent', () => {
  let component: StudentEmailverifyComponent;
  let fixture: ComponentFixture<StudentEmailverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEmailverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmailverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
