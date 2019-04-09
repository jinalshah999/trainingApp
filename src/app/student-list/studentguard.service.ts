import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EditStudentReactiveComponent } from './edit-student-reactive/edit-student-reactive.component';
@Injectable({
  providedIn: 'root'
})
export class StudentguardService implements CanDeactivate<EditStudentReactiveComponent> {

  canDeactivate(component:EditStudentReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean{

      if(component.isDirty()){
       return  confirm('are you sure? ');
      }
      return true;
  }
  constructor() { }
}
