import { UnitTestingService } from './../unit-testing.service';
import { UserService } from './../../Component/user-details/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-demo',
  templateUrl: './testing-demo.component.html',
  styleUrls: ['./testing-demo.component.css'],
  providers: [UnitTestingService]
})
export class TestingDemoComponent implements OnInit {

  user!: {
    name: string
  }
  isTesting= false;
  constructor(private unitTesting: UnitTestingService  ) { }

  ngOnInit(): void {
   this.user = this.unitTesting.myUser;
  }

}
