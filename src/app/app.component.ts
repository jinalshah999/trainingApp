import { Component,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  // template:`
  // <h1>hello</h1>
  // `,
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title:string = 'trainingApp';

}
