import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  arr:Task[]=[
    new Task('1','push your code to git hub','pending'),
    new Task('2','email to your manager','done')
  ];
  arr1:Task[]=this.arr;

  onAddTask(id,title,status){
    this.arr.push(new Task(id,title,status));
  }
  onDeleteTask(i){
    this.arr.splice(this.arr.indexOf(i),1);
  }
  onUpdateTask(i){

    if(i.status=="done"){
      i.status="pending";
    }
    else
    {
      i.status="done";
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
