import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { MenuComponent } from './component/menu/menu.component';
import { CredentialsComponent } from './component/credentials/credentials.component';

import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { CategoriesComponent } from './component/categories/categories.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MenuComponent,
    CredentialsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
