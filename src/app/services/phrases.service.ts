import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://type.fit/api/quotes';

@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

constructor( private http: HttpClient) { }

getPhrases() {
  return this.http.get(url);
}

}
