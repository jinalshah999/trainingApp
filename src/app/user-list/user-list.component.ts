import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from './user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
user_arr:User[]=[];
  constructor(private _userdata:UserserviceService) { }

  ngOnInit() {
    this._userdata.getAllUser().subscribe(
      (data:User[])=>{
        this.user_arr=data;
      },
      function(error){
        console.log(error);
      },
      function(){
        console.log('complete call');
      }
    );
  }

}
