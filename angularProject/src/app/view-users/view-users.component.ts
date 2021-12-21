import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  contacts$ : any;
  users: any;
  userStatus : any;
  listUser : any;
  userDetails : any;
  userMsg: any;

  constructor(private contactService: ContactsService) {

    contactService.getUsers().subscribe(data =>{

      this.listUser = data;
    }, error =>{
      console.log(error);
   })
  }
  ngOnInit(): void {

    this.users = ['ram', 'shyam', 'laxman', 'Sita'];
    this.contacts$ = of(this.users);
    console.log(this.contacts$);

    new Observable(observer =>{

      setTimeout (()=>{

        observer.next("Send this Value")
      }, 2000);

      setTimeout (()=>{

        observer.next("Send this pending")
      }, 4000);

      setTimeout (()=>{

        observer.next("Completed")
      }, 6000);

    }).subscribe(data =>{

      this.userStatus = data;
    }, error => {                     // optional any name what we want

      console.log(error);

    })

    this.contactService.viewUser().toPromise()
    .then(response =>{
      this.userDetails = response;
      // this.userDetails = response.email;
    })
    .catch(error =>{
      console.log(error);
    })
    .finally(()=>{
      this.userMsg = "User detail loaded"
    })
  }
}
