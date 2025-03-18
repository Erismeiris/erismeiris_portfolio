import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {

  experienceYears = 5;
  started = 2019;

  date = new Date();
  year = this.date.getFullYear();

  constructor() { 
this.experienceYears = this.year - this.started;
  }

  ngOnInit() {}

  
}
