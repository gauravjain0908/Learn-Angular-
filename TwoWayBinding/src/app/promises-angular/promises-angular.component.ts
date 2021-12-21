import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises-angular',
  templateUrl: './promises-angular.component.html',
  styleUrls: ['./promises-angular.component.css']
})
export class PromisesAngularComponent implements OnInit {

  constructor( private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onPromise()
  {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

}
