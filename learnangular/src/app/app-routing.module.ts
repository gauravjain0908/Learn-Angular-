import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  // This will load when it is required to load
  { path : 'admin' , loadChildren:()=> import('./admin/admin.module')
    .then (mod => mod.AdminModule)
  },
  { path : 'user' , loadChildren:()=> import('./user/user.module')
    .then (mod => mod.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
