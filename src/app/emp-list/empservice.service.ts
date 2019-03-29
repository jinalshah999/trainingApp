import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  employees:Employee[]=[
    new Employee(1,'rajat',12333,'trainee'),
    new Employee(2,'priyank',12333,'trainee')
  ];
  sortlistEmp:Employee[]=[];
  constructor() { }

  getAllEmployee():Employee[]{
    return this.employees;
  }
  addEmployee(item:Employee){
    this.employees.push(item);
  }
  deleteEmployee(item:Employee){
    this.employees.splice(this.employees.indexOf(item),1);
  }
  addToSortListEmp(item:Employee){
    if(this.sortlistEmp.indexOf(item)!=-1)
    {
      alert("already presant");
    }
    else
    {
      this.sortlistEmp.push(item);
    }

  }
  getAllSortListEmp():Employee[]{
    return this.sortlistEmp;
  }

}
