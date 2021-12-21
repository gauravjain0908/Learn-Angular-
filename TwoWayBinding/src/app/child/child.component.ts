import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() mydata :any;
  @Output() outputData = new EventEmitter<any>();

  myDataOutput = "This is data that I passing from child to parent"

  constructor() { }

  ngOnInit(): void {
  }

  getData()
  {
    this.outputData.emit(this.myDataOutput);
  }
}
