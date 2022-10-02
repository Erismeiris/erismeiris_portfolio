import { Component, OnInit } from '@angular/core';
import { PhrasesService } from '../../services/phrases.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public phrases:any = [];

  constructor( private phrasesServices: PhrasesService) {
    this.getPhrases();
   }

  ngOnInit() {
    
    
  }

  getPhrases() {
    this.phrasesServices.getPhrases()
      .subscribe( (resp: any) => {
          this.phrases = resp;
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10,
    slideTransition:'linear',
    responsive: {
      0: {
        items: 1
      },
      
    },
   
  }

}
