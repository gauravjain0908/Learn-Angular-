import { RecordService } from './record.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { BasicsComponent } from './basics/basics.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import { UseNgContainComponent } from './Contain/use-ng-contain/use-ng-contain.component';
import { UseNgContainProductComponent } from './Contain/use-ng-contain-product/use-ng-contain-product.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BasicsComponent,
    ReactiveFormComponent,
    UseNgContainComponent,
    UseNgContainProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
