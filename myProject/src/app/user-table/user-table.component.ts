import { UserService } from './../services/user.service';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ["userId", "title", "body"];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}

export class UserDataSource extends DataSource<any>{

constructor (private userService : UserService)
{
  super();
}

connect (): Observable<User[]>
{
  return this.userService.getUser();
}

disconnect ()
{}

}
