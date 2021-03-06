import { Component, EventEmitter } from '@angular/core';
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
  showCategoriesView = false; 
  categories:Array<string> = ['Groceries'];
  selectedCategory: string;
  showActive: boolean = true;
  showComplete: boolean = false;

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
    category: '',
    finished: false,
  };
  todo1: Todo = {
    id: 1,
    note: 'Note 2',
    urgency: Urgency.None,
    priority: 1,
    dueDate: new Date(),
    category: 'Groceries',
    finished: false,
  };
  todos = [this.todo, this.todo1];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        (todos) => this.todos = todos[0],
        (error) => console.log(error)
      );
  }

  toggleMenuView() {
    this.showMenuView = !this.showMenuView;
  }

  toggleCategoriesView() { 
    this.showCategoriesView = !this.showCategoriesView;
  }

  createNewCategory(name) {
    this.categories.push(name);
  }

  selectCategory(category) { 
    this.selectedCategory = category || '';
  }

  addTodo() {
    const todoNew: Todo = {
      id: 1,
      note: 'New note!',
      urgency: Urgency.None,
      priority: 1,
      dueDate: new Date(),
      category: '',
      finished: false,
    };
    this.todos.push(todoNew);
  }

  toggleActiveView() { 
    this.showActive = !this.showActive;
  }

  toggleCompleteView() { 
    this.showComplete = !this.showComplete;
  }
}
