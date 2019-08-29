import { Component, Input } from '@angular/core';

@Component({
  
  selector: 'app-child',
  template: `
  <div class="cbox">
    <h1>Child Component</h1>
    <h5>
    Message is : {{message}}
    </h5>
  </div>
  `,
  styles : [`
      .cbox{
        padding : 5px;
        margin : 5px;
        background-color : orangered;
        border : 1px solid red;
          
      }
  `]


})
export class ChildComponent{
  
  @Input()  message =""


}