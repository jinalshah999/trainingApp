import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from './user-list/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard2Service implements CanActivate {

  constructor(private _userAuth:UserAuthService,
    private _router:Router) { }
  canActivate(_next:ActivatedRouteSnapshot,
    _state:RouterStateSnapshot):boolean{
      if(this._userAuth.currentUser!=null){
        return true;
      }
      this._userAuth.redirectURL=_state.url;
      this._router.navigate(['/login']);
  }
}
