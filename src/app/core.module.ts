import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./user-list/login/login.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
declarations:[
  PageNotFoundComponent,
    LoginComponent,
    HomeComponent
],
imports:[CommonModule]

})
export class CoreModule{}
