import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpListComponent } from "./emp-list.component";
import { AddemployeeComponent } from "./addemployee/addemployee.component";
import { EmpSidebarComponent } from "./emp-sidebar/emp-sidebar.component";
import { routingEmpArr } from "./emp.routing";

@NgModule({
  declarations: [EmpListComponent, AddemployeeComponent, EmpSidebarComponent],
  imports: [CommonModule, routingEmpArr]
})
export class EmpModule {}
