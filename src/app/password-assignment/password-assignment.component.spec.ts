import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAssignmentComponent } from './password-assignment.component';

describe('PasswordAssignmentComponent', () => {
  let component: PasswordAssignmentComponent;
  let fixture: ComponentFixture<PasswordAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
