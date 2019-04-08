import { StudentServiceService } from './student-service.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
studentArray:Student[]=[];
  constructor(private _studentData:StudentServiceService,
    private _router:Router) { }

  ngOnInit() {
    this._studentData.getAllStudents().subscribe(
      (data:Student[])=>{
        this.studentArray=data;
      },
      function(err){
        console.log(err);
      },
      function(){
        console.log('call completed');
      }
    );
  }
  onDeleteStudent(item:Student){
    if(confirm('Are you sure you want to delete?')){
    this._studentData.deleteStudent(item.roll_no).subscribe(
      (data:any)=>{
        if(data.affectedRows>0){
          this.studentArray.splice(this.studentArray.indexOf(item),1);
        }
        else{
          alert('something went wrong!');
        }
      }
    );
  }
  }
  onUpdateStudent(item:Student){
    this._router.navigate(['/editStudentReactive',item.roll_no]);
  }
  onViewStudent(item){
    this._router.navigate(['/viewStudentReactive',item.roll_no]);
  }

}
