import { Component } from '@angular/core';
import { Todo, Urgency } from './models/todo';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'app';
  todos: Todo[];
  // todo: Todo = {
  //   id: 0,
  //   note: '',
  //   urgency: Urgency.None,
  //   priority: 0,
  //   date: new Date(),
  //   category: 0,
  //   finished: false,
  // };
  // todo1: Todo = {
  //   id: 1,
  //   note: '',
  //   urgency: Urgency.None,
  //   priority: 0,
  //   date: new Date(),
  //   category: 0,
  //   finished: false,
  // };
  // todos = [this.todo, this.todo1];
  constructor(private apiService: ApiService) { }

  ngOnInit() { 
    this.apiService
      .getTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }
}
