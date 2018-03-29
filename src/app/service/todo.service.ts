import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo, Urgency } from '../models/todo';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) { }

  public getTodos() {
    return this.http.get('api/todos');
  }

  public createTodo(todo: Todo) {
    return this.http.post('api/todos', todo);
  }

  public updateTodo(todo: Todo) {
    return this.http.put('api/todos/' + todo.id, todo);
  }
}
