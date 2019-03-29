import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private _emp_data:EmpserviceService) { }

  ngOnInit() {
  }
  onEmpSave(emp_id,emp_name,emp_salary,emp_desg){

    this._emp_data.addEmployee(new Employee(emp_id,emp_name,emp_salary,emp_desg));
  }
  onCancel(){

  }

}
