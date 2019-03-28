import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
ans:number=0;
  constructor() { }

  ngOnInit() {
  }
  onAdd(num1,num2){

    this.ans= parseInt(num1)+ parseInt(num2);
  }

}
