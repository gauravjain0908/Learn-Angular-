import { HeaderComponent } from './header/header.component';
import { PromisesAngularComponent } from './promises-angular/promises-angular.component';
import { DrowDownLanguageComponent } from './drow-down-language/drow-down-language.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'', redirectTo:'/header', pathMatch:'full'},
  {path:'dropDown', component: DrowDownLanguageComponent},
  {path:'header', component: HeaderComponent, children: [

  { path:'promises', component: PromisesAngularComponent},

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PromisesAngularComponent]
