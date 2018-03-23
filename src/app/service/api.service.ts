import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Todo } from '../models/todo'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getTodos(): Observable<Todo[]> {
    return this.http
      .get('api/todos')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => todo);
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post('api/todos', todo)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http
      .put('api/todos/' + todo.id, todo)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
