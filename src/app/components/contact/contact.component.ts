import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  date= new Date();
  messageDate = this.date.getFullYear();
  get currentDate() {
    return new Date();
  }
  public messageForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message:['', [Validators.required,Validators.minLength(10) ]],
    date: ['', Validators.required]
    
  })

  constructor( private fb: FormBuilder, private messageServices: MessageService ) { }

  ngOnInit() {
  }

  async sendMessage(){
  this.messageForm.patchValue({ date: this.currentDate.toDateString() });
  await this.messageServices.addMessage({
    name: this.messageForm.get('name')!.value,
    email: this.messageForm.get('email')!.value,
    message: this.messageForm.get('message')!.value,
    date: this.messageForm.get('date')!.value
  });
   
   alert('Message sent succefuly')
   this.messageForm.reset();
  }

  

}
