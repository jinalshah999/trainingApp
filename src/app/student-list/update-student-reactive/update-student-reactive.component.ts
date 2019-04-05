import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-update-student-reactive',
  templateUrl: './update-student-reactive.component.html',
  styleUrls: ['./update-student-reactive.component.css']
})
export class UpdateStudentReactiveComponent implements OnInit {
updateStudentForm:FormGroup;
roll_no:number;
  constructor(private _activatedRoute:ActivatedRoute,private _studentData:StudentServiceService,
          private _router:Router) { }

  ngOnInit() {
    this.updateStudentForm=new FormGroup({
      roll_no:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[Validators.required,this.validateName.bind(this)]),
      fees:new FormControl(null),
      mobile_no:new FormControl(null)
    });
    this.roll_no=this._activatedRoute.snapshot.params['roll_no'];
    this._studentData.getStudentByRollNumber(this.roll_no).subscribe(
      (data:Student[])=>this.getAllDetails(data[0])
    );
  }
  getAllDetails(data:Student){
    this.updateStudentForm.patchValue({
      roll_no:data.roll_no,
      name:data.name,
      fees:data.fees,
      mobile_no:data.mobile_no
    });

  }
  str:string='';
  validateName(control:AbstractControl):{[key:string]:boolean}|null{
    if(control.value=="jinal"){
      return {'invalidLength':true};
    }
    return null;
  }
  updateStudent(){

    let x:Student;
    x.roll_no=this.updateStudentForm.value.roll_no;
    x.fees=this.updateStudentForm.value.fees;
    x.mobile_no=this.updateStudentForm.value.mobile_no;
    //x.name=str;
    // this.updateStudentForm.value
    this._studentData.updateStudent(x).subscribe(
      (data:any)=>{
        this._router.navigate(['/student']);
      }
    );
  }

}
