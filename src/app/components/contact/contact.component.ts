import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public messageForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message:['', [Validators.required,Validators.minLength(10) ]]
    
  })

  constructor( private fb: FormBuilder, private messageServices: MessageService ) { }

  ngOnInit() {
  }

  async sendMessage(){
    const resp =  await this.messageServices.addMessage(this.messageForm.value)
   alert('Message sent succefuly')
   this.messageForm.reset();
  }

  

}
