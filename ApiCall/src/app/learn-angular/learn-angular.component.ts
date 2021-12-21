import { Component, Input, OnInit } from '@angular/core';
import {T}


@Component({
  selector: 'app-learn-angular',
  templateUrl: './learn-angular.component.html',
  styleUrls: ['./learn-angular.component.css']
})
export class LearnAngularComponent implements OnInit {

  @Input() myEvent: any;

  constructor() { }

  events = [
  {
    id: 1,
    name:'Angular Connect',
    price : 599.66,
    time : '8:00 am',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location :{

      address: "A-305 Malviya Nagar Alwar",
      City: "Alwar",
      street: "Arya Kanya School"
    }

  },
  {
    id: 2,
    name:'Learn Connect',
    price : 599.66,
    time : '9.00 am',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location : {
      address: "A-310 Malviya Nagar Alwar",
      City: "Jaipur ",
      street: "Arya School"
    }
  },
  {
    id: 3,
    name:'Angular Learn',
    price : 599.66,
    time : '7.00 am',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    location : {
      address: "A-309 Malviya Nagar Alwar",
      City: "Delhi",
      street: " Kanya School"
    }
  },

]

handleThumbnail ()
{
 
  toastr.success();
}

  ngOnInit(): void {
  }

}
