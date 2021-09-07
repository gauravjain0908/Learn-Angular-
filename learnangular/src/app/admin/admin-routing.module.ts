import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'login', component  :LoginComponent },
  { path: 'list',  component  :ListComponent  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }