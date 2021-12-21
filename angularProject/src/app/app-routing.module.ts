import { ViewUsersComponent } from './view-users/view-users.component';
import { ObservableComponent } from './observable/observable.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo:'/view-users', pathMatch: 'full'},
  {
    path: 'observable', component: ObservableComponent
  },
  {
    path:'view-users', component: ViewUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
