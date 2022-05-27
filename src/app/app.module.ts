import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookShowComponent } from './book-show/book-show.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookAddComponent,
    BookEditComponent,
    BookDeleteComponent,
    BookShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // chỉ định ng FormsModule
    ReactiveFormsModule,//chỉ định FormGroup
    HttpClientModule //người dùng Http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
