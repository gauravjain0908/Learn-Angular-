import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // name : string= "";
  // number : number = 0;

  // userObj : any = {};
  // userList : any = [];

  // isDataVisible = false;

  userForm!: FormGroup;
  listData: any;

  constructor(private router: Router, private fb: FormBuilder){

    this.listData = [];

    this.userForm = this.fb.group({

      name: ['', Validators.required],
      address : ['', Validators.required],
      contactNo: ['', [Validators.required], [Validators.maxLength]],
      gender: ['', Validators.required]

    })
  }

  addItem()
  {
    this.listData.push(this.userForm.value);
  }

  removeItem(element: any)
  {
  this.listData.array.forEach((value: any, index: any)=>{
    if(value==element)
    this.listData.splice(index, 0)
  });
  }

  reset()
  {
    this.userForm.reset();
  }

  ngOnInit(): void
  {
    // this.name = '';
    // this.number = 0;
  }
  //  submit()
  //  {
  //   if((this.name != '') && (this.number > 0)) {
  //   this.userObj.name= this.name;
  //   this.userObj.number = this.number;
  //   this.userList.push(this.userObj);
  //   this.userObj= {}; //Reset
  //   }
  //  }

  //  name1 = new FormControl('Gaurav');

  //  profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });

  // onSubmit ()
  // {
  //   console.log(this.profileForm.value);

  // }































}

