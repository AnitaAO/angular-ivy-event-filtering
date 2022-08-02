import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <input (keyup.enter)="onKeyUp()">
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 title = "Event Filtering";

 onKeyUp(){
   console.log("Enter was pressed")
 }
}
