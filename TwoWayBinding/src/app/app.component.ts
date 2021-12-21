import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TwoWayBinding';
  inputText= "Hi This is data pass from parent to child";

  foo = 'Hello';
  bar = 'World';

  changeFn(e: any) {
    this.foo = e.target.value;
    console.log(e);

  }
  modelChangeFn(value: any) {
    this.bar = value;
    console.log(value);

  }

  dataPassing(event:any)
  {
    console.log(event);

  }


}
