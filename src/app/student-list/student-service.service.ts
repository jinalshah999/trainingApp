import { Injectable } from '@angular/core';
import { endPoints } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
url=endPoints.url+"student/";
commonHeader=new HttpHeaders().set('Content-Type','application/json');
  constructor(private _http:HttpClient) {   }
  getAllStudents(){
    return this._http.get<Student[]>(this.url);
  }
  getStudentByRollNumber(roll_no:number){
    return this._http.get<Student[]>(this.url+roll_no);
  }
  addStudent(item:Student){
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:this.commonHeader});
  }
  updateStudent(item:Student){
    let body=JSON.stringify(item);
    return this._http.put(this.url+item.roll_no,body,{headers:this.commonHeader});
  }
  deleteStudent(roll_no:number){
    return this._http.delete(this.url+roll_no,{headers:this.commonHeader});
  }

}
