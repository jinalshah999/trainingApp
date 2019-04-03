import { Directive } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: "[appFeesvalidator]",
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:FeesvalidatorDirective,
    multi:true
  }]
})
export class FeesvalidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value <= 0 ? { 'feesLessthen0': true } : null;
  }
  constructor() {}
}
