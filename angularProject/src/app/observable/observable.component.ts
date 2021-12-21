import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus : any;
  data!: Observable<any>;

  constructor() { }

  ngOnInit(): void {

    new Observable(observer =>{

      setTimeout(()=>{
        observer.next("In Process");
      }, 4000)

      setTimeout(()=>{
        observer.next("In Progress");
      }, 8000)

      setTimeout(()=>{
        observer.next("In Complete");
      }, 10000)

      setTimeout(()=>{
        console.log("Observable Completed");
        observer.complete();
      }, 12000)

    }).subscribe(val =>{
      this.orderStatus = val;
    })
  }

}
