import { NativeElementComponent } from './NativeWebComponent/native-element/native-element.component';
import { TestingDemoComponent } from './UnitTesting/testing-demo/testing-demo.component';
import { OfflineServiceWorkerComponent } from './ServiceWorker/offline-service-worker/offline-service-worker.component';
import { AnimationComponent } from './Animation/animation/animation.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SimpleFormComponent } from './FirebaseDataStore/simple-form/simple-form.component';
import { PipeComponent } from './LearnPipe/pipe/pipe.component';
// import { ReactiveFormComponent } from './ReactiveForm/reactive-form/reactive-form.component';
import { FormComponent } from './templateDrivenForm/form/form.component';
import { LanguageComponent } from './i18LanguageChange/language/language.component';
import { UserDetailsComponent } from './Component/user-details/user-details.component';
import { AboutComponent } from './Component/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { MaterialUIBasicComponent } from './AngularMaterial/material-uibasic/material-uibasic.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'userDetail', component: UserDetailsComponent},
  {path: 'i18', component: LanguageComponent},
  {path: 'templateForm', component: FormComponent},
  {path: 'materialUI', component: MaterialUIBasicComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'simpleForm', component: SimpleFormComponent},
  {path: 'myForm', component: MyFormComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'offlineServiceWorker', component: OfflineServiceWorkerComponent},
  {path: 'unitTesting', component: TestingDemoComponent},
  {path: 'nativeWebComponent', component: NativeElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
