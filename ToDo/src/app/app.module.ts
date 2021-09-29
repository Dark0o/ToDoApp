import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoItemComponent } from './to-do-item/to-do-item.component';
import { LoginComponent } from './login/login.component';
import { ToDoDetailsComponent } from './to-do-details/to-do-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoInputComponent,
    ToDoItemComponent,
    LoginComponent,
    ToDoDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
