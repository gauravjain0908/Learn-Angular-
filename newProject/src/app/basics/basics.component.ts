import { RecordService } from './../record.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

function log(target: any, name: any, descriptor: any)
{
  // console.log(target, name, descriptor);

  const original = descriptor.value;

  descriptor.value = function(...args: any){
  const result = original.apply(this, args)
  console.log(result);

}
  return descriptor;
}

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  records = {};
  filename = '';
  http: any;

  constructor(private myFirstService: RecordService, private httpClient : HttpClient) {
  //   this.aSimpleMethod(5,2);
  }
  ngOnInit(): void {

  }

  onFileSelected(event: any) {

    const file:File = event.target.files[0];

    if (file) {

        this.filename = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

        const upload$ = this.http.post("/api/thumbnail-upload", formData);

        upload$.subscribe();
    }
}

  // ngOnInit(): void {

  //   // setInterval(()=>{
  //   //   this.somevar = Math.random();
  //   //   console.log(this.somevar);

  //   // }, 50)

  //   this.records = this.myFirstService.getData();
  // }




  @log
  aSimpleMethod(a:number, b:number)
  {
    console.log("Hey There");
    return a*b;
  }


}
