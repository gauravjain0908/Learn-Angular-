import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drow-down-language',
  templateUrl: './drow-down-language.component.html',
  styleUrls: ['./drow-down-language.component.css']
})
export class DrowDownLanguageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onChange(deviceValue:any) {
    console.log(deviceValue);
  }
  selectLanguage(e:any)
  {

  }
}
