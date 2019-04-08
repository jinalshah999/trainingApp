import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
currentUser:any=null;
redirectURL:string="";
  constructor(private _router:Router) { }
  logIn(username,password){
    if(username==='admin'){
      this.currentUser={
        id:'admin@gmail.com',
        uname:'admin'
      }
      return;
    }
    this.currentUser={
      id:username+'@gmail.com',
      uname:username
    }

  }
  logOut(){
    this.currentUser=null;
    this._router.navigate(['']);
  }
}
