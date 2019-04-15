import { Routes, RouterModule } from "@angular/router";
import { UserGuardService } from "./user-guard.service";
import { Calc1Component } from "./calc1/calc1.component";
import { CalcComponent } from "./calc/calc.component";
import { DemoComponent } from "./demo/demo.component";
import { TodoComponent } from "./todo/todo.component";

const arr: Routes = [
  {
    path: "misc",
    children: [
      {
        path: "todo",
        canActivate: [UserGuardService],
        component: TodoComponent
      },
      { path: "calc", component: CalcComponent },
      { path: "calc1", component: Calc1Component },
      { path: "demo", component: DemoComponent }
    ]
  }
];

export const routingMiscArr = RouterModule.forChild(arr);
