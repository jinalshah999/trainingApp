import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { Calc1Component } from './calc1/calc1.component';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product/product.component';
import { FilterPipe } from './filter.pipe';
import { DemodirectiveDirective } from './demodirective.directive';
import { HighliterDirective } from './highliter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductComponent } from './product-list/addproduct/addproduct.component';
import { routingArr } from './app.routing';
import { CartComponent } from './product-list/cart/cart.component';
import { MenuComponent } from './menu.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddemployeeComponent } from './emp-list/addemployee/addemployee.component';
import { EmpSidebarComponent } from './emp-list/emp-sidebar/emp-sidebar.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './student-list/add-student/add-student.component';
import { EditStudentComponent } from './student-list/edit-student/edit-student.component';
import { FeesvalidatorDirective } from './student-list/feesvalidator.directive';
import { FeesDirective } from './student-list/fees.directive';
import { UserListComponent } from './user-list/user-list.component';
import { AdduserComponent } from './user-list/adduser/adduser.component';
import { AddStudentReactiveComponent } from './student-list/add-student-reactive/add-student-reactive.component';
import { EditStudentReactiveComponent } from './student-list/edit-student-reactive/edit-student-reactive.component';
import { UpdateStudentReactiveComponent } from './student-list/update-student-reactive/update-student-reactive.component';
import { ViewStudentReactiveComponent } from './student-list/view-student-reactive/view-student-reactive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './user-list/login/login.component';
import { UrlSerializer } from '@angular/router';
import { lowercaseconvert } from './lowercaseconvert';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    Calc1Component,
    TodoComponent,
    ProductComponent,
    FilterPipe,
    DemodirectiveDirective,
    HighliterDirective,
    CreditcardDirective,
    SidebarComponent,
    ProductListComponent,
    AddproductComponent,
    CartComponent,
    MenuComponent,
    EmpListComponent,
    AddemployeeComponent,
    EmpSidebarComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    FeesvalidatorDirective,
    FeesDirective,
    UserListComponent,
    AdduserComponent,
    AddStudentReactiveComponent,
    EditStudentReactiveComponent,
    UpdateStudentReactiveComponent,
    ViewStudentReactiveComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routingArr
  ],
  providers: [
    {
      provide:UrlSerializer,
      useClass:lowercaseconvert
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
