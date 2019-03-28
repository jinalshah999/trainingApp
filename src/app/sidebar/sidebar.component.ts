import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 @Input() title:string="hello";
 @Output() demo=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSearch(searchterm){
    this.demo.emit(searchterm);
  }
  onKeyUp(searchterm){
    this.demo.emit(searchterm);
  }

}
