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

  setTodoToFinished(todoId) {
    const todoToUpdate = this.todos.filter((todo) => todo.id === todoId)[0];
    todoToUpdate.finished = !todoToUpdate.finished;
    this.todoService.updateTodo(todoToUpdate)
    .subscribe(
      (todo) => null,
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
