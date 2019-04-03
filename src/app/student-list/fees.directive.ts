import { Directive } from "@angular/core";
import {  AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
  selector: "[appFees]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: FeesDirective,
      multi: true
    }
  ]
})
export class FeesDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): { [key: string]: boolean } | null {
    return control.value <= 0 ? { 'feeslessthanzero': true } : null;
  }
}
