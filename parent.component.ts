import { Component } from '@angular/core';

@Component({
  
  selector: 'app-parent',
  template: `
  <div class="pbox">
    <h1>Parent Component</h1>
    <app-child [message]="ptitle"></app-child>
  </div>
  `,
  styles : [`
      .pbox{
          border:1px solid slategray;
          background-color : silver;
          padding : 10px;
          
      }
  `]


})
export class ParentComponent{
    ptitle = "Hello from parent";


}