import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';

@Component({
  selector: 'app-view-student-reactive',
  templateUrl: './view-student-reactive.component.html',
  styleUrls: ['./view-student-reactive.component.css']
})
export class ViewStudentReactiveComponent implements OnInit {
id:number;
student:Student;
  constructor(private _activatedRoute:ActivatedRoute,private _studentData:StudentServiceService) { }

  ngOnInit() {
    this.id=this._activatedRoute.snapshot.params['roll_no'];
    this._studentData.getStudentByRollNumber(this.id).subscribe(
      (data:Student[])=>this.getAllDetails(data[0])
    );
  }
  getAllDetails(data:Student){
    this.student=data;
  }

}
