import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './user-list/user-auth.service';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
flag:boolean=true;
get login(){
  if(this._userAuth.currentUser!=null){
    console.log('login'+this.flag);
    this.flag=false;
  }
  else{
    console.log('logout'+this.flag);
    this.flag=true;
  }
  return this.flag;
}
  constructor(private _userAuth:UserAuthService) { }

  ngOnInit() {

  }
  logout(){
    this._userAuth.logOut();
  }

}
