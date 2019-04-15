import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentListComponent } from "./student-list.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { FeesvalidatorDirective } from "./feesvalidator.directive";
import { FeesDirective } from "./fees.directive";
import { AddStudentReactiveComponent } from "./add-student-reactive/add-student-reactive.component";
import { EditStudentReactiveComponent } from "./edit-student-reactive/edit-student-reactive.component";
import { UpdateStudentReactiveComponent } from "./update-student-reactive/update-student-reactive.component";
import { ViewStudentReactiveComponent } from "./view-student-reactive/view-student-reactive.component";
import { routingStudentArr } from "./student.routing";

@NgModule({
  declarations:[ StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    FeesvalidatorDirective,
    FeesDirective,
    AddStudentReactiveComponent,
    EditStudentReactiveComponent,
    UpdateStudentReactiveComponent,
    ViewStudentReactiveComponent],
  imports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routingStudentArr]
})
export class StudentModule{}
