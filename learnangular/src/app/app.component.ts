import { UserServiceService } from './user-service.service';
import { Component } from '@angular/core';


interface typeInterface{

  name:String
  id:number
  Indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnangular';
  data :any = [];

  // MODEL & SERVICE
  getData1()
  {
    const data : typeInterface = {
      name:"Gaurav",
      id:10,
      // Indian: yes, error because it is not boolean
      Indian: false
    }
    return this.getData1;
  }





  // API CALLING
  constructor (private user:UserServiceService)
  {
    this.user.getData().subscribe((data: any) =>{

      console.log(data);
      this.data=data;
    })
  }
}
