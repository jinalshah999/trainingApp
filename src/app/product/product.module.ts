import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { routingProductArr } from "./product.routing";

@NgModule({
  declarations: [ProductComponent,
     SidebarComponent],
  imports: [CommonModule,
    routingProductArr]
})
export class ProductModule {}
