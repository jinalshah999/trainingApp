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
import { ViewStudentReactiveComponent } from './student-list/view-student-reactive/view-student-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './user-list/login/login.component';
import { UserGuardService } from './user-guard.service';
import { StudentguardService } from './student-list/studentguard.service';

const arr:Routes=[
  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'addProduct',component:AddproductComponent},
  {path:'todo', canActivate:[UserGuardService], component:TodoComponent},
  {path:'calc',component:CalcComponent},
  {path:'calc1',component:Calc1Component},
  {path:'demo',component:DemoComponent},
  {path:'emp',
  children:[
    {path:'',component:EmpListComponent},
    {path:'add',canActivate:[UserGuardService],component:AddemployeeComponent}
  ]
  },
  {path:'student',canActivate:[UserGuardService],
  children:[
    {path:'',component:StudentListComponent},
    {path:'add',component:AddStudentComponent},
    {path:'add1',component:AddStudentReactiveComponent},
    {path:'edit/:roll_no',component:EditStudentComponent},
    {path:'edit1/:roll_no',component:EditStudentReactiveComponent, canDeactivate:[StudentguardService] },
    {path:'view/:roll_no',component:ViewStudentReactiveComponent}
  ]},
  {path:'user',
  children:[
    {path:'',component:UserListComponent},
    {path:'add',component:AdduserComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}
];

export const routingArr=RouterModule.forRoot(arr);
