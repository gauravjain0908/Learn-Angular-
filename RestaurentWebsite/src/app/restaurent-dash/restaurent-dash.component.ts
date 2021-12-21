import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {


   formValue!: FormGroup;
   restaurentModelObj : RestaurantData = new RestaurantData;
   allRestaurantData : any;


  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {

    this.formValue= this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAllData();
  }

  // Now Subscribe our Data which is mapped via Services

  addResto()
  {
    this.restaurentModelObj.name = this.formValue.value.name;
    this.restaurentModelObj.email = this.formValue.value.email;
    this.restaurentModelObj.mobile = this.formValue.value.mobile;
    this.restaurentModelObj.address = this.formValue.value.address;
    this.restaurentModelObj.services = this.formValue.value.services;

    this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
      console.log(res);
      alert("Restaurant Records Added Successful")

      //clear fill form data 0
      let ref = document.getElementById('clear');
      ref?.click();

      this.formValue.reset();
      this.getAllData(); // Get All Data
    },error =>{
      console.log(error);
    })
  }

  getAllData()
  {
    this.api.getRestaurant().subscribe(res=>{
      this.allRestaurantData =  res;
    })
  }

  //delete Resto
  deleteResto(data:any)
  {
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert("Restaurent Record Delete")
      this.getAllData();
    })
  }

}
