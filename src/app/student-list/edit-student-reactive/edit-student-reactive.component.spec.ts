import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentReactiveComponent } from './edit-student-reactive.component';

describe('EditStudentReactiveComponent', () => {
  let component: EditStudentReactiveComponent;
  let fixture: ComponentFixture<EditStudentReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStudentReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
