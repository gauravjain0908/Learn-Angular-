import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }


  url : string = "https://jsonplaceholder.typicode.com/posts"

  getUsers()
  {
    return this.httpClient.get<Users[]>(this.url);
  }

}
