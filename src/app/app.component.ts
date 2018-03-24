import { Component } from '@angular/core';
import { Todo, Urgency } from './models/todo';
import { User } from './models/user';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService, UserService]
})
export class AppComponent {
  title = 'app';
  showMenuView = false;

  user: User = {
    id: 0,
    lastName: 'Pepper',
    firstName: 'Tim',
    email: 'timpepper@email.com'
  };

  todo: Todo = {
    id: 0,
    note: 'Note 1',
    urgency: Urgency.None,
    priority: 0,
    dueDate: new Date(),
    category: 0,
    finished: false,
  };
  todo1: Todo = {
    id: 1,
    note: 'Note 2',
    urgency: Urgency.None,
    priority: 1,
    dueDate: new Date(),
    category: 0,
    finished: false,
  };
  todos = [this.todo, this.todo1];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.user
    this.todoService.getTodos()
      .subscribe(
        (todos) => this.todos = todos[0],
        (error) => console.debug(error)
      );
  }

  toggleMenuView() { 
    this.showMenuView = !this.showMenuView;
  }

  logOut() { 
    console.log("bye");
  }
}
