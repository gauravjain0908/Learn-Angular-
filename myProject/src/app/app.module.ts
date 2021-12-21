import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTableComponent } from './user-table/user-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
