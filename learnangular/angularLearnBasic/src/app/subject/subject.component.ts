import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  subject$ = new Subject();

  observable = new Observable(observer => {
    observer.next("first");
    observer.next("second");
    observer.error("error");
  });


  ngOnInit() {

    this.subject$.subscribe(val => {
      console.log(val);
    });

    this.subject$.next("1");
    this.subject$.next("2");
    this.subject$.complete();

    this.observable.subscribe(this.subject$);
  }
}
