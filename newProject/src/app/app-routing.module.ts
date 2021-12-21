import { UseNgContainProductComponent } from './Contain/use-ng-contain-product/use-ng-contain-product.component';
import { UseNgContainComponent } from './Contain/use-ng-contain/use-ng-contain.component';
import { BasicsComponent } from './basics/basics.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[

  {path: '', redirectTo: '/reactive', pathMatch: 'full'},
  {path: 'form', component:FormComponent},
  {path: 'reactive', component: ReactiveFormComponent},
  {path: 'basic', component:BasicsComponent},
  {path: 'ng-contain', component:UseNgContainComponent},
  {path: 'ng-contain-product', component: UseNgContainProductComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
