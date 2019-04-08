import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EditStudentReactiveComponent } from './student-list/edit-student-reactive/edit-student-reactive.component';

@Injectable({
  providedIn: 'root'
})
export class StudentGuardService implements CanDeactivate<EditStudentReactiveComponent> {

  constructor() { }
  canDeactivate(component: EditStudentReactiveComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      console.log('called');
      if(component.isDirty()){
        return confirm(`Navigate away and lose all changes?`);
      }
      return true;
  }

}
