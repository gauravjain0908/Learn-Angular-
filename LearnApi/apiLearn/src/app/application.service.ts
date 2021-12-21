import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


interface User  // Interface declare or send what type of values we are sending into the observable
{
   name:string;
   email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient : HttpClient) { }


   title = "This is Gaurav"
   description = "Description"


   //Get Also we use observable to make more identifiable
   updateUser()
   {
    const header = new HttpHeaders({

      'content-type': 'application/json/',
      'authenticationToken' : '123454545'
     });

     const putBody ={

      name: 'Gaurav',
      body : 'bar',
      userId: 1
     };

     return this.httpClient.put("https://jsonplaceholder.typicode.com/users/1", putBody, {headers:header});
   }


   //Post
   addUser(body:any)
   {

    const postBody = {

      title: body.title,
      body: body.description
    };


     return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', postBody);
   }

  getUsers():Observable<User>
  {
   const header = new HttpHeaders({

    'content-type': 'application/json',
    'authenticationToken' : '12345'
   });

   const param = new HttpParams()
   .set('pageNum', '10')
   .set('pageOptions', '100');

    return this.httpClient.get <User>("https://jsonplaceholder.typicode.com/users", {headers : header, params:param})
  }

}
