import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./product-list.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import { CartComponent } from "./cart/cart.component";
import { routingProductListArr } from "./productList.routing";

@NgModule({
declarations:[
  ProductListComponent,
  AddproductComponent,
  CartComponent
],
imports:[CommonModule,
routingProductListArr]
})
export class ProductListModule{}
