import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { MenuComponent } from './component/menu/menu.component';
import { CredentialsComponent } from './component/credentials/credentials.component';

import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MenuComponent,
    CredentialsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
