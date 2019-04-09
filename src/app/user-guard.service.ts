import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from './user-list/user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  canActivate(_next:ActivatedRouteSnapshot,
    _state:RouterStateSnapshot):boolean
  {
      if(this._userData.currentUser!=null){
        return true;
      }
      this._userData.redirectURL=_state.url;
      this._router.navigate(['/login']);
      return false;
  }
  constructor(private _userData:UserAuthService,private _router:Router) { }
}
