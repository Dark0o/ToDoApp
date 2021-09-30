import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoInputComponent } from './components/to-do-input/to-do-input.component';
import { ToDoItemComponent } from './components//to-do-item/to-do-item.component';
import { LoginComponent } from './components/login/login.component';
import { ToDoDetailsComponent } from './components//to-do-details/to-do-details.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoInputComponent,
    ToDoItemComponent,
    LoginComponent,
    ToDoDetailsComponent,
    NavigationComponent,
    AddToDoComponent
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
