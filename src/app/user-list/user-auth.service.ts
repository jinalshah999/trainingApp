import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { endPoints } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
currentUser:any=null;
redirectURL:string='';
url = endPoints.url + "login/";
commonHeader = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private _router:Router,private _http:HttpClient) { }

  login(item){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:this.commonHeader}).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(ex: HttpErrorResponse) {
    if (ex.error instanceof ErrorEvent) {
      console.log("client side error", ex.message);
    } else {
      console.log("server side error", ex.message);
    }
    return throwError("something went wrong");
  }
  logOut(){
    this.currentUser=null;
    this._router.navigate(['']);
  }
}
