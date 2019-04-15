import { Routes, RouterModule } from "@angular/router";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { ProductListComponent } from "./product-list.component";

const arr: Routes = [
  { path: "productlist", component: ProductListComponent },
  { path: "addProduct", component: AddproductComponent }
];

export const routingProductListArr = RouterModule.forChild(arr);
