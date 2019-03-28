import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  arr:string[]=[
    'jinal',
    'shreeja',
    'drashti'
  ];
  flag:boolean=true;
  a:number=10;
  str:string='jinal'
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    alert("hello world")
  }
}
