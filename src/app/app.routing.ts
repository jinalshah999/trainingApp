import {  Routes,RouterModule  } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TodoComponent } from './todo/todo.component';
import { CalcComponent } from './calc/calc.component';
import { Calc1Component } from './calc1/calc1.component';
import { DemoComponent } from './demo/demo.component';

const arr:Routes=[

  {path:'',component:ProductComponent},
  {path:'todo',component:TodoComponent},
  {path:'calc',component:CalcComponent},
  {path:'calc1',component:Calc1Component},
  {path:'demo',component:DemoComponent}
];

export const routingArr=RouterModule.forRoot(arr);
