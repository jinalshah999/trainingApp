import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userData:UserAuthService,private _router:Router) { }

  ngOnInit() {
  }
  logIn(username,password){
    this._userData.logIn(username,password);
    if(this._userData.redirectURL){
      this._router.navigateByUrl(this._userData.redirectURL);
    }
    else{
      this._router.navigate(['']);
    }
  }
}
