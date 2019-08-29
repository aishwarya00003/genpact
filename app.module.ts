import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,GridComponent,ParentComponent,ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
