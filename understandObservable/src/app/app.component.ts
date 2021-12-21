import { UserService } from './Component/user-details/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  isActivated = false;
  private Unsubscribe? : Subscription;
  title = 'understandObservable';

  constructor( private route: Router,  private userService: UserService){
  }

  ngOnInit(): void {

    this.Unsubscribe = this.userService.onActivatedMethod.subscribe(didActivated =>{
      this.isActivated = didActivated;
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.Unsubscribe?.unsubscribe();

  }


}
