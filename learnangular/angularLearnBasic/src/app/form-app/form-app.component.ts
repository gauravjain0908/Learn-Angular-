import { ApplicationService } from './application.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {

  constructor(private service: ApplicationService) { }

  value : number = 0 ;
  ngOnInit(): void {
  }

  submitBtn(item : any)
  {
    for (let i = 0 ; i < item; i++)
    {

      this.service.postData().subscribe((data) =>{
        console.log(data);
      }, (err)=>{
          console.log(err);
      })

      let UniqueValue = "" + Date.now();
      let val1 = 'XA_' + UniqueValue;
      let val2 = 'BR_' + UniqueValue;
      this.service.getApplication(val1, val2)
    }
  }
}
