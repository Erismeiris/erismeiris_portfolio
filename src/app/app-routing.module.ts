import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {path:'messages', component:MessagesComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
