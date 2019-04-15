import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list.component";
import { AdduserComponent } from "./adduser/adduser.component";

const arr:Routes=[
  {
    path: "user",
    children: [
      { path: "", component: UserListComponent },
      { path: "add", component: AdduserComponent }
    ]
  }
];

export const routingUserArr=RouterModule.forChild(arr);
