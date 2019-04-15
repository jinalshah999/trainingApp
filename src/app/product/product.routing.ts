import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./product.component";

const arr:Routes=[
  {path:'prod',component:ProductComponent}
];

export const routingProductArr=RouterModule.forChild(arr);
