import { Component, OnInit } from '@angular/core';
// import {CreateCustomElement} from '@angular/elements';

@Component({
  selector: 'app-native-element',
  templateUrl: './native-element.component.html',
  styleUrls: ['./native-element.component.css']
})
export class NativeElementComponent implements OnInit {

  course! : string | number | boolean;

  content = '';
  constructor() {

    setTimeout(()=>{

      this.content = "<p> A Paragraph </p>" //This works
this.content = "<app-alert> message = 'Rendered fdfdf dffdfdd ffddfffffffffffffffffffffffff  dfffffffffffff Dynamic Component'</app-alert> "
    },1000)

   }

  ngOnInit(): void {
  }

}
