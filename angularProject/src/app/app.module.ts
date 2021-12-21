import { LoggingInterceptor } from './logging.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObservableComponent } from './observable/observable.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChildComponent } from './child/child.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table'
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ViewUsersComponent,
    ChildComponent,
    ImageGalleryComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    NgbModule,
    MatIconModule,
    NgxSpinnerModule,
    MatTooltipModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [

    {
      provide : HTTP_INTERCEPTORS, useClass : LoggingInterceptor , multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
