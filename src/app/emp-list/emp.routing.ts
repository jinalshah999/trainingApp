import { Routes, RouterModule } from "@angular/router";
import { EmpListComponent } from "./emp-list.component";
import { UserGuardService } from "../user-guard.service";
import { AddemployeeComponent } from "./addemployee/addemployee.component";

const arr:Routes=[

    {path:'',component:EmpListComponent},
    {path:'add',canActivate:[UserGuardService],component:AddemployeeComponent}

];

export const routingEmpArr=RouterModule.forChild(arr);
