import { Component } from '@angular/core';
import { Todo, Urgency } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todo: Todo = {
    id: 0,
    note: '',
    urgency: Urgency.None,
    priority: 0,
    date: new Date(),
    category: 0,
    finished: false,
  };
  todo1: Todo = {
    id: 1,
    note: '',
    urgency: Urgency.None,
    priority: 0,
    date: new Date(),
    category: 0,
    finished: false,
  };
  todos = [this.todo, this.todo1];
}
