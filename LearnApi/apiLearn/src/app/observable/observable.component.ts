import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  contact$ : any;
  users$ : any;
  constructor() { }

  ngOnInit(): void {

    this.users$ = ['ram', 'sita', 'laxman', 'bharat'];
    this.contact$ = of(this.users$)

    console.log(this.contact$);


  }



}
