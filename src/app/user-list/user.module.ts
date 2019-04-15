import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { routingUserArr } from "./user.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { UserListComponent } from "./user-list.component";
import { AdduserComponent } from "./adduser/adduser.component";

@NgModule({
  declarations: [UserListComponent, AdduserComponent],
  imports: [CommonModule, ReactiveFormsModule, routingUserArr]
})
export class UserModule {}
