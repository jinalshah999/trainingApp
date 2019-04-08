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
import { EditStudentReactiveComponent } from './student-list/edit-student-reactive/edit-student-reactive.component';
import { UpdateStudentReactiveComponent } from './student-list/update-student-reactive/update-student-reactive.component';
import { StudentGuardService } from './student-guard.service';
import { ViewStudentReactiveComponent } from './student-list/view-student-reactive/view-student-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentGuard2Service } from './student-guard2.service';
import { LoginComponent } from './user-list/login/login.component';

const arr:Routes=[


  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'todo',component:TodoComponent,canActivate:[StudentGuard2Service]},
  {path:'calc',component:CalcComponent,canActivate:[StudentGuard2Service]},
  {path:'calc1',component:Calc1Component,canActivate:[StudentGuard2Service]},
  {path:'demo',component:DemoComponent},
  {path:'emp',component:EmpListComponent},
  {path:'addEmp',component:AddemployeeComponent},
  {path:'student',component:StudentListComponent},
  {path:'addStudent',component:AddStudentComponent},
  {path:'editStudent/:roll_no',component:EditStudentComponent},
  {path:'addUser',component:AdduserComponent},
  {path:'user',component:UserListComponent},
  {path:'addStudentReactive',component:AddStudentReactiveComponent},
 {path:'viewStudentReactive/:roll_no',component:ViewStudentReactiveComponent},
  {path:'editStudentReactive/:roll_no',component:EditStudentReactiveComponent,
    canDeactivate:[StudentGuardService]},
    {path:'**',component:PageNotFoundComponent}
];

export const routingArr=RouterModule.forRoot(arr);
