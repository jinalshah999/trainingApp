import {  Routes,RouterModule  } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CalcComponent } from './calc/calc.component';
import { Calc1Component } from './calc1/calc1.component';
import { DemoComponent } from './demo/demo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductComponent } from './product-list/addproduct/addproduct.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddemployeeComponent } from './emp-list/addemployee/addemployee.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './student-list/add-student/add-student.component';
import { EditStudentComponent } from './student-list/edit-student/edit-student.component';
import { AdduserComponent } from './user-list/adduser/adduser.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddStudentReactiveComponent } from './student-list/add-student-reactive/add-student-reactive.component';

const arr:Routes=[

  {path:'',component:ProductListComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'todo',component:TodoComponent},
  {path:'calc',component:CalcComponent},
  {path:'calc1',component:Calc1Component},
  {path:'demo',component:DemoComponent},
  {path:'emp',component:EmpListComponent},
  {path:'addEmp',component:AddemployeeComponent},
  {path:'student',component:StudentListComponent},
  {path:'addStudent',component:AddStudentComponent},
  {path:'editStudent/:roll_no',component:EditStudentComponent},
  {path:'addUser',component:AdduserComponent},
  {path:'user',component:UserListComponent},
  {path:'addStudentReactive',component:AddStudentReactiveComponent}
];

export const routingArr=RouterModule.forRoot(arr);
