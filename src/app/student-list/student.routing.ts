import { Routes, RouterModule } from "@angular/router";
import { UserGuardService } from "../user-guard.service";
import { StudentListComponent } from "./student-list.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { AddStudentReactiveComponent } from "./add-student-reactive/add-student-reactive.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { EditStudentReactiveComponent } from "./edit-student-reactive/edit-student-reactive.component";
import { StudentguardService } from "./studentguard.service";
import { ViewStudentReactiveComponent } from "./view-student-reactive/view-student-reactive.component";

const arr:Routes=[
  {
    path: "",
    children: [
      { path: "", component: StudentListComponent },
      { path: "add", component: AddStudentComponent },
      { path: "add1", component: AddStudentReactiveComponent },
      { path: "edit/:roll_no", component: EditStudentComponent },
      {
        path: "edit1/:roll_no",
        component: EditStudentReactiveComponent,
        canDeactivate: [StudentguardService]
      },
      { path: "view/:roll_no", component: ViewStudentReactiveComponent }
    ]
  }
];

export const routingStudentArr=RouterModule.forChild(arr);
