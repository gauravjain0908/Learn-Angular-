import { ApplicationService } from './application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'apiLearn';
  name ="";
  user : any;
  constructor (private service:ApplicationService) {}

  ngOnInit(): void {

    this.service.getUsers().subscribe((data) =>{
    this.user = data;
   },(err) =>{
     console.log("Unable to get data");
  })
}
  submit(item:any)
  {
    console.log(item.value);
    //Same we call here to get post request need to complete
    // this.service.addUser(title)

     this.service.updateUser().subscribe((data) =>{
      console.log(data);
     }, (err) =>{
      console.log(err);
     })
  }

}
