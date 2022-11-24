import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/models/messages';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  public messages?:Messages[];

  constructor( private messageServices: MessageService) { }

  ngOnInit() {
this.getMessage();
  }
  
  getMessage(){
    this.messageServices.getMessages().subscribe( resp => {
      this.messages = resp

      console.log(this.messages)
    })
  }
}
