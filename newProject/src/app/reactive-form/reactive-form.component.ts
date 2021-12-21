import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  checkoutForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router) {

    // this.checkoutForm = formBuilder.group({

    //   emailAddr : new FormControl(),
    //   passWord : new  FormControl()
    // });
    this.checkoutForm = formBuilder.group({

      emailAddr : ['' , Validators.required],
      passWord :  ['', Validators.required ],
      chkBox :    ['', Validators.requiredTrue]

    });
   }
  ngOnInit(): void {

  // Value Changes every Time we change it

    this.checkoutForm.get('emailAddr')?.valueChanges.subscribe(data =>{
    console.log(data);
  })

    this.checkoutForm.setValue({   // Set Value in Reactive Form
      emailAddr: 'gauravjain0931@gmail.com',
      passWord: 10,
      chkBox : true
    })

  //  this.checkoutForm.patchValue({  This is used to set particular value

  //  })

  }


  submitForm(){
    console.log( `This will print entire Form` + this.checkoutForm);
    console.log(this.checkoutForm.value.emailAddr);
    this.router.navigateByUrl('/form')
  }

  resetForm(){
    this.checkoutForm.reset();
  }
}
