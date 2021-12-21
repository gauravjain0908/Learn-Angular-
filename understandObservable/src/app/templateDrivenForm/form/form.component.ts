import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('form') signUpForm?: NgForm;
  defaultValue = "Parrot";
  answer=''
  genders = ['Male', 'Female'];

  submitted = false ;

  user = {
    username: '',
    email: '',
    secretQuestion : '',
    answer: '',
    gender: ''
  };
  constructor() { }

  ngOnInit(): void {}

  suggestUserName() {

    //Set Value will set your Whole Form and PatchValue
    // set the particular Form

    const suggestedName = 'Superuser';
    // this.signUpForm?.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.signUpForm?.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  onSubmit()
  {
    this.submitted = true;
    this.user.username = this.signUpForm?.value.userData.username;
    this.user.email = this.signUpForm?.value.userData.email;
    this.user.secretQuestion = this.signUpForm?.value.questionAnswer;
    this.user.gender = this.signUpForm?.value.gender;
    // console.log(this.signUpForm);
    this.signUpForm?.reset();
  }

}
