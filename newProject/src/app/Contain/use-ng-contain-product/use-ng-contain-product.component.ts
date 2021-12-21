import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-ng-contain-product',
  templateUrl: './use-ng-contain-product.component.html',
  styleUrls: ['./use-ng-contain-product.component.css']
})
export class UseNgContainProductComponent implements OnInit {


  @Input() myName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
