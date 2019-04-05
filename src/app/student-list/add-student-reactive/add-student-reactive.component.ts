import { Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student-reactive',
  templateUrl: './add-student-reactive.component.html',
  styleUrls: ['./add-student-reactive.component.css']
})
export class AddStudentReactiveComponent implements OnInit {
studentForm:FormGroup;
  constructor(private _studentData:StudentServiceService) { }

  myValidation(control:AbstractControl):{[key:string]:boolean}|null{
    if(control.value==="jinal"){
      return {'invalidUsername':true};
    }
    return null;
  }
  passwordValidation(control:AbstractControl):{[key:string]:boolean}|null{
    console.log(control.value);
    if(control.value!=this.studentForm.get('confrimPassword').value){
      return {'passwordsDoesNotMatch':true}
    }
    return null;
  }
  ngOnInit() {
    this.studentForm=new FormGroup({
      roll_no:new FormControl(null,[Validators.required]),
      name:new FormControl(null,[this.myValidation.bind(this)]),
      fees:new FormControl('0',[Validators.required,Validators.max(5)]),
      mobile_no:new FormControl(null,[Validators.required,Validators.max(10)]),

    });
  }
  onStudentAdd(){
    console.log(this.studentForm);
    let student=this.studentForm.value;
    // let student=new Student(roll_no,name,fees,mobile_no);
    // this._studentData.addStudent(student).subscribe(
    //   (data:any)=>{
    //     if(data.affectedRows==1){
    //       console.log(data.insertId);
    //       alert('Successfully added one record');
    //     }
    //     else{
    //       alert('something went wrong');
    //     }
    //   }
    // );
  }

}
