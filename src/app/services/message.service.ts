import { Injectable } from '@angular/core';
import { Messages } from '../models/messages';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { Firestore, collection, addDoc, collectionData } from "@angular/fire/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

constructor( private firestore: Firestore) { }

addMessage( message:Messages){
  const newMessage = collection(this.firestore, 'messages');
  return addDoc(newMessage, message);

}

getMessages(): Observable<Messages[]>{
  const newMessage = collection(this.firestore, 'messages');
  return collectionData(newMessage, {idField: 'id'}) as Observable<Messages[]>
}
}
