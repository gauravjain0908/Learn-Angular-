import { Component } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'myProject';
  name = "";
  propertyBinding = "";
  myField = {
    value: 'any',
    label: 'label',
  };


  msg : string = "";
  changeValue :string ="";
  onItemAdded(event: any)
  {
    this.msg = event.target.value +" " +"Added on Cart"
  }

  // Value Basically tell the name of that variable that we write in text box
  btnClick(item:any)
  {
    this.name=item.value;
  }
  myText(item:any)
  {
    this.name = item.value;
  }

  changeText(item:any)
  {
    //  console.log(item.target.value);
     this.changeValue = item.target.value;
  }
}
