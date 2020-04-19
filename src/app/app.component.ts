import { Component } from '@angular/core';
import {AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'zomatoModel';
  restaurants: Object;
  constructor(private appservice: AppserviceService){

  }
  ngOnInit(){
    this.appservice.getApi().subscribe((data)=>{
      this.restaurants=data["restaurants"];
      console.log(this.restaurants);
      // console.log(this.restaurant.timings);
    })
  }
}