import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DetailComponent } from './detail/detail.component';
import { ChildComponent } from './child/child.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component'
import { QuillModule } from 'ngx-quill';
import { FormsComponent } from './forms/forms.component'

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ChildComponent,
    QuillEditorComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    QuillModule.forRoot(),
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
