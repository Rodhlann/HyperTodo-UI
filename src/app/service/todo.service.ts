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

  defaultURL = 'http://localhost:40258/api/Todo/';

  public getTodosByUserId(userId: number) {
    return this.http.get(this.defaultURL + 'GetAllByUserId/' + userId);
  }

  public createTodo(todo: Todo) {
    return this.http.put(this.defaultURL + 'CreateTodo', todo);
  }

  public updateTodo(todo: Todo) {
    return this.http.put(this.defaultURL + 'UpdateTodo', todo);
  }

  public deleteTodo(todoId: number) {
    return this.http.delete(this.defaultURL + 'DeleteTodoById/' + todoId);
  }
}
