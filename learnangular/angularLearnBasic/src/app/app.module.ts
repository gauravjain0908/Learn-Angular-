import { ApplicationService } from './form-app/application.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAppComponent } from './form-app/form-app.component';
import {HttpClient,  HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SubjectComponent } from './subject/subject.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAppComponent,
    SubjectComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

    {
      provide : HTTP_INTERCEPTORS,
      useClass: ApplicationService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
