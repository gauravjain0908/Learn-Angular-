import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor() { }

  getData()
  {
    return [
      {
        "name": "Gaurav",
        "age" : 18
      },
      {
        "name": "Suresh",
        "age": 20
      },
      {
        "name": "Mahesh",
        "age" : 30
      }
    ]
  }
}
