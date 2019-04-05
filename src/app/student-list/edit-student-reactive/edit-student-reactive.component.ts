import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student-reactive',
  templateUrl: './edit-student-reactive.component.html',
  styleUrls: ['./edit-student-reactive.component.css']
})
export class EditStudentReactiveComponent implements OnInit {
id:number=0;
studentForm:FormGroup;
  constructor(private _activatedRoute:ActivatedRoute,
    private _studentData:StudentServiceService,
    private _router:Router) { }

  ngOnInit() {
    this.studentForm=new FormGroup({
      roll_no:new FormControl(0),
      name:new FormControl(null),
      fees:new FormControl(0),
      mobile_no:new FormControl(0)

    });
    this.id=this._activatedRoute.snapshot.params['roll_no'];
    this._studentData.getStudentByRollNumber(this.id).subscribe(
      (data:Student[])=>this.getAllDetails(data[0])
    );
  }
  getAllDetails(data:Student){
    this.studentForm.patchValue({
      roll_no:data.roll_no,
      name:data.name,
      fees:data.fees,
      mobile_no:data.mobile_no
    });

  }
  onStudentEdit(){
    this._studentData.updateStudent(this.studentForm.value).subscribe(
      (data:any)=>{
        this._router.navigate(['/student']);
      }
    );
  }

}
