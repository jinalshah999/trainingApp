import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
id:number;
student:Student={roll_no:0,name:'',fees:0,mobile_no:0};
  constructor(private _activatedRoute:ActivatedRoute,
    private _studentData:StudentServiceService,
    private _router:Router) { }

  ngOnInit() {
    this.id=this._activatedRoute.snapshot.params['roll_no'];
    this._studentData.getStudentByRollNumber(this.id).subscribe(
      (data:Student[])=>{
        console.log(data);
       this.student=data[0];
      }
    );
  }
  onStudentSave(roll_no,name,fees,mobile_no){
    console.log(roll_no);
    console.log(name);
    let student=new Student(roll_no,name,fees,mobile_no);
    this._studentData.updateStudent(student).subscribe(
      (data:any)=>{
        if(data.affectedRows===1){
          alert('data updated successfully');
          this._router.navigate(['/student']);
        }
        else{
          alert('failure');
        }
      }
    );
  }

}
