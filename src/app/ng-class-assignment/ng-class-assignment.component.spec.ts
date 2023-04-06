import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassAssignmentComponent } from './ng-class-assignment.component';

describe('NgClassAssignmentComponent', () => {
  let component: NgClassAssignmentComponent;
  let fixture: ComponentFixture<NgClassAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
