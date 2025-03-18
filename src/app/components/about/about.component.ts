import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  public age: number = 25;


  date = new Date();


  constructor() { 
    const birthYear = 1985;
    this.age = this.date.getFullYear() - birthYear;
  }

  ngOnInit() {
  }

}
