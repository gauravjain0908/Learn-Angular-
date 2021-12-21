import { submitData } from './../mockData/requestData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';
import { endPointData } from './endPoint';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements HttpInterceptor{

  constructor(private httpClient:HttpClient) { }




  postData()
  {
    // const header = new HttpHeaders({

    //   authentication: 'qZrVNtvbZg7JbR4d3U3lvaOcgpseGUd06vj3FbQx'
    // })
   return this.httpClient.post(endPointData.apiServiceUrl, submitData);
  }

  intercept(req:any, next:any)
  {
    let tokenizerReq = req.clone({
      setHeaders:{
        'x-api-key': 'qZrVNtvbZg7JbR4d3U3lvaOcgpseGUd06vj3FbQx'
      }
    })
    return next.handle(tokenizerReq);
  }

  getApplication(irn:string, breedersReference: string)
  {
    console.log(irn);
    console.log(breedersReference);
  }
}
