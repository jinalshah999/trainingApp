import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from './empservice.service';
import { Employee } from './employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  emp:Employee[]=[];
  constructor(private _data:EmpserviceService) { }

  ngOnInit() {
   this.emp=this._data.getAllEmployee();
  }
  onEmpDelete(item:Employee){
    this._data.deleteEmployee(item);
  }
  onEmpSort(item:Employee){
    this._data.addToSortListEmp(item);
  }
}
