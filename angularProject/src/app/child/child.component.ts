import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges{

  @Output() greetChild = new EventEmitter;
  @Input() loggedIn!: boolean;
  name = "Gaurav";
  name2 = '';
  arr = [];
  constructor() { }

  ngOnInit(): void {

    this.arr.push();
  }
  callParentGreet()
  {
    this.greetChild.emit(this.name);
  }

  ngOnChanges(changes: SimpleChanges)
  {
    console.log("This is ");
  }

  onSubmit(item:any)
  {
    this.arr.push();
  }

  downloadMyFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
 }

  onClick(item: any)
  {
    console.log(item);
    // this.name = item.target.value;
    this.name2= item.value;
  }
}
