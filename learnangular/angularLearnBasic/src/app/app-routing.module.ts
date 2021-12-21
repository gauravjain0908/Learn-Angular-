import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { FormAppComponent } from './form-app/form-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/form-app', pathMatch: 'full'},
  { path: 'form-app', component:FormAppComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'observable', component: ObservableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
