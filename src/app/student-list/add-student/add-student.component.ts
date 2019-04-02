import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private _studentData:StudentServiceService) { }

  ngOnInit() {
  }
  onStudentSave(roll_no,name,fees,mobile_no)
  {
    let student=new Student(roll_no,name,fees,mobile_no);
    this._studentData.addStudent(student).subscribe(
      (data:any)=>{
        if(data.affectedRows==1){
          console.log(data.insertId);
          alert('Successfully added one record');
        }
        else{
          alert('something went wrong');
        }
      }
    );
  }

}
