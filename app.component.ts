import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template : `
  <h1>{{ title }}</h1>
  <app-header [herolist]="herodata"></app-header>
  <hr>
 <app-grid [herolist]="herodata"></app-grid>
  <hr>
  <app-parent ></app-parent>
  
  `
})
export class AppComponent {
  title = 'Genpact Application';
  herodata = [];


   constructor(private hs:HeroService){}
   ngOnInit(){
       this.herodata=this.hs.getData();
   }



}