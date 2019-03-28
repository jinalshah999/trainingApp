import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styles: []
})
export class Calc1Component implements OnInit {

  num1:number=0;
  num2:number=0;
  ans:number=0;
  constructor() { }

  ngOnInit() {
  }
  onAdd(){
    this.ans=this.num1+this.num2;
  }

}
