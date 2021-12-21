import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../app/customer.service'
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  title = 'angularProject';
  totalRecords!: Number;
  data: Array<any> = [];
  page: Number = 1;
  userList : any;
  name = "Hi this is parent";
  userLoggedIn = false;
  date = new Date();
  greet(name : string)
  {
    alert('Hello ' + name);
  }


 public list = [];

 ngOnInit()
 {

 }


// this.spinner.show();
// setTimeout(() =>{
// this.spinner.hide();
// }, 2000)

}

  // constructor(private obj: CustomerService){

  //   obj.getObjectAPI().subscribe(data =>{

  //     console.log(data);
  //   })
  // }

  // constructor(private spinner : NgxSpinnerService){

  // }

