import { ChildComponent } from './child/child.component';
import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'formsData';
  url="https://mail.google.com/mail/u/0/";


  value = "This is placeholder"
  placeholder = "Enter Value"
  ngColor = "red";
  show = "yes"
  getName = true;
  myName = "Gaurav"
  displayName = '';

  parentItem = "parent to child Work"



  items = ['items1', 'items2', 'items3', 'items4'];

  isUnchange = false;


  onKeydown(event:any) {
      console.log(event);

  }

  childComponent ='This is Child Component';

  addMyChild(event:any)
  {
    console.log("This is Child Component Work");
  }


  addMyItems(newItems : string)
  {
     this.items.push(newItems);
  }
  Item()
  {
    console.log("This is Btn Click");
  }

  function(events : any)
  {
     this.displayName =  events.target.value;
  }

  changeValue()
  {
    this.displayName = "I am ";
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
