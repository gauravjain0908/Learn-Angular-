import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

   // Now hee I will define the POST, GET, PUT, DELETE

   postRestaurant(data:any)
   {
     return this.httpClient.post("https://jsonplaceholder.typicode.com/users", data).pipe((map((res:any)=>{
        return res;
      }))
     )
   }

  //  Get Restaurent data using Get Method

   getRestaurant()
   {
      return this.httpClient.get("https://jsonplaceholder.typicode.com/comments?postId=1").pipe(
        map((res:any)=>{
          return res;
        }))
   }

   // Update Restaurant using PUT method

   deleteRestaurant(id:number)
   {
     return this.httpClient.delete<any>("https://localhost:3000/posts"+id).pipe(
       map((res:any)=>{
        return res;
      }))
   }


}
