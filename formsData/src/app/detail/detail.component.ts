import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() childItem = "This is Me";
  @Output() newItemAdded = new EventEmitter<string>();

  myBtn : any;
  constructor() { }


  ngOnInit(): void {

    this.myBtn=this.childItem;
  }

  addNewItem(item: string)
  {
    this.newItemAdded.emit(item);
  }
}
