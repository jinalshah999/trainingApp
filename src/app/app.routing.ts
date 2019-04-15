import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./user-list/login/login.component";
import { HomeComponent } from "./home/home.component";
import { UserGuardService } from "./user-guard.service";

const arr: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "emp", loadChildren:'./emp-list/emp.module#EmpModule'},
  { path: "student", canLoad:[UserGuardService],loadChildren:'./student-list/student.module#StudentModule'},
  { path: "**", component: PageNotFoundComponent }
];

export const routingArr = RouterModule.forRoot(arr);
