import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @ViewChild('txt') txtColor : ElementRef | undefined;
  @Input() childWork ='';
  @Output() outputChild = new EventEmitter<string>();

  mttext="black";

  ngAfterViewInit()
  {
    this.mttext = this.txtColor?.nativeElement.style.backgroundColor;

  }


  myChildWork = "";

  constructor() { }

  ngOnInit(): void {
  }


  myChildBtn(item:any)
  {
    this.outputChild.emit(item)
  }

}
