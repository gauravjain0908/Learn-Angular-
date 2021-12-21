import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// interface User {

//   name: string;
//   email: string;
//   id : number;
// }


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<object>
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments");
  }

  // Here we can pass in Observable as an interface beacuse in parametere we can pass any type of object so we can make interface
  // to do that so Observable <User> and in get<User>
  viewUser() : Observable<object>
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments/1");
  }
}


