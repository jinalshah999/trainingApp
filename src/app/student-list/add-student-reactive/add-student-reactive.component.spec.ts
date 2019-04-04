import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentReactiveComponent } from './add-student-reactive.component';

describe('AddStudentReactiveComponent', () => {
  let component: AddStudentReactiveComponent;
  let fixture: ComponentFixture<AddStudentReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
