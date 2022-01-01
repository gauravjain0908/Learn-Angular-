import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  
  status: any = [];
  Item: any = [];

  constructor()
  {
    this.Item = ["SUBMITTED",'RECEIVED','DULY-FILED','GRANTED'];
    this.status = this.Item;
    console.log(this.status[0]);

  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
  gotoCLick(event: any)
  {
    console.log(event);
  }

}


