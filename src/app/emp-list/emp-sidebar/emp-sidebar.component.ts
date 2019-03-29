import { Component, OnInit } from '@angular/core';
import { EmpserviceService } from '../empservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-sidebar',
  templateUrl: './emp-sidebar.component.html',
  styleUrls: ['./emp-sidebar.component.css']
})
export class EmpSidebarComponent implements OnInit {
arr_emp:Employee[]=[];

  constructor(private _data:EmpserviceService) { }

  ngOnInit() {
    this.arr_emp= this._data.getAllSortListEmp();
  }

}
