import { Component, Input } from "@angular/core";

@Component({


    selector:'app-grid',
    template:`
    <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th>Sl #</th>
        <th>Title</th>
        <th>Full Name</th>
        <th>City</th>
        <th>Release Date</th>
        <th>Ticket Price</th>
        <th>Movies List</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let hero of herolist">
        <td>{{ hero.sl }}</td>
        <td>{{ hero.title | uppercase }}</td>
        
        <td>{{ hero.firstname+' '+hero.lastname }}</td>
        <td>{{ hero.city }}</td>
        <td>{{ hero.releasedate | date : 'dd-MMMM-yyyy'}}</td>
        <td>{{ hero.ticketprice | currency : 'INR' :'symbol' : '3.2-3' }}</td>
        <td>
        <button class="btn btn-primary">{{ hero.movieslist.length }}</button>
        </td>
      </tr>
    </tbody>

  <img src="assets/images/batman.jpg" >

    `





})
export class GridComponent{

   @Input() herolist = [];




}