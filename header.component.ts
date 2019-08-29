import { Component, Input } from "@angular/core";

@Component({

  selector:'app-header',
  template:`
  <ul class="nav justify-content-center">
  <li *ngFor="let hero of herolist" class="nav-item">
    <a class="nav-link" href="#">{{ hero.title }}</a>
  </li>
</ul>
  
  `



})


export class HeaderComponent{

   @Input() herolist = [];




}