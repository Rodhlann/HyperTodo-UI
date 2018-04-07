import { Component, OnInit, EventEmitter } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'app';
  showMenuView = false;
  showCategoriesView = false;
  categories: Array<string> = ['Groceries'];
  selectedCategory: string;
  showActive = true;
  showComplete = false;

  user: User = {
    id: 0,
    lastName: 'Pepper',
    firstName: 'Tim',
    email: 'timpepper@email.com'
  };

  todos: Array<Todo>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodosByUserId(this.user.id)
      .subscribe(
        (todos) => this.todos = Object.values(todos),
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
      id: -1,
      note: 'New note!',
      urgency: Urgency.None,
      priority: 0,
      dueDate: new Date(),
      category: '',
      finished: false,
    };
    this.todoService.createTodo(todoNew)
      .subscribe(
        (todos) => this.todos = Object.values(todos),
        (error) => console.log(error)
      );
  }

  toggleTodoFinished(todo: Todo) {
    todo.finished = !todo.finished;
    this.updateTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
    .subscribe(
      (todos) => this.todos = Object.values(todos),
      (error) => console.log(error)
    );
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo)
    .subscribe(
      (updatedTodo: Todo) => null,
      (error) => console.log(error)
    );
  }

  toggleActiveView() {
    this.showActive = !this.showActive;
  }

  toggleCompleteView() {
    this.showComplete = !this.showComplete;
  }
}
