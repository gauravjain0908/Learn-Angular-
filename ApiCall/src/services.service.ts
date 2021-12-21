// import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) { }

  getcomments()
  {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments");
  }
}
