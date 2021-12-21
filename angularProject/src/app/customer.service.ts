import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

    getObjectAPI(){
      return this.httpClient.get("https://jsonplaceholder.typicode.com/comments");
    }
}
