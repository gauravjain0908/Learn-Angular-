import { AlertComponent } from './NativeWebComponent/alert.component';
import { ShortenPipe } from './LearnPipe/pipe/shorten.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { UserDetailsComponent } from './Component/user-details/user-details.component';
import { LanguageComponent } from './i18LanguageChange/language/language.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormComponent } from './templateDrivenForm/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormComponent } from './ReactiveForm/reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUIBasicComponent } from './AngularMaterial/material-uibasic/material-uibasic.component';
import { MaterialModule } from './material/material.module';
import { PipeComponent } from './LearnPipe/pipe/pipe.component';
import { FilteredPipe } from './LearnPipe/filtered.pipe';
import { SimpleFormComponent } from './FirebaseDataStore/simple-form/simple-form.component';
import { MyFormComponent } from './my-form/my-form.component';
import { AnimationComponent } from './Animation/animation/animation.component';
import { OfflineServiceWorkerComponent } from './ServiceWorker/offline-service-worker/offline-service-worker.component';
import { ServicePostComponent } from './service-post/service-post.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestingDemoComponent } from './UnitTesting/testing-demo/testing-demo.component';
import { NativeElementComponent } from './NativeWebComponent/native-element/native-element.component';

export function HttpLoaderFactory (http: HttpClient)
{
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserDetailsComponent,
    LanguageComponent,
    FormComponent,
    AlertComponent,
    MaterialUIBasicComponent,
    PipeComponent,
    ShortenPipe,
    FilteredPipe,
    SimpleFormComponent,
    MyFormComponent,
    AnimationComponent,
    OfflineServiceWorkerComponent,
    ServicePostComponent,
    TestingDemoComponent,
    NativeElementComponent,
    // ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatDatepickerModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
