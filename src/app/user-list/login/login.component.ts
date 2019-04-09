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
    let item={user_email:username,password:password};
    this._userData.login(item).subscribe(
      (data:any[])=>{
        if(data.length==1)
        {
        console.log(data);
        this._userData.currentUser={
          user_name:data[0].user_name,
          user_email:data[0].user_email
        }
        if(this._userData.redirectURL){
          this._router.navigateByUrl(this._userData.redirectURL);
        }
        else{
          this._router.navigate(['']);
        }
      }
      else
      {
        alert('username or password invalid');
      }

      }

    );


  }
}
