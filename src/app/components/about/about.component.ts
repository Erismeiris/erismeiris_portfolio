import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  public age: number = 25;
  experiencesYears = 5;
  started = 2019;
  public birthYear = 1985;

  date = new Date();


  constructor() { 
    this.age = this.date.getFullYear() - this.birthYear;
    this.experiencesYears = this.date.getFullYear() - this.started;
  }

  ngOnInit() {
  }

}
