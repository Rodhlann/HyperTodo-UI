import { TestBed, inject, async } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient, HttpClientModule, HttpParams, HttpRequest } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Todo, Urgency } from '../models/todo';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it(`it calls getTodosByUserId`,
    async(
      inject([HttpClient, HttpTestingController, TodoService],
        (http: HttpClient, backend: HttpTestingController, service: TodoService) => {
          const USER_ID = 1;
          service.getTodosByUserId(USER_ID).subscribe();
          backend.expectOne({
            url: service.defaultURL + 'GetAllByUserId/' + USER_ID,
            method: 'GET'
          });
        })
    )
  );

  it(`it calls createTodo`,
    async(
      inject([HttpClient, HttpTestingController, TodoService],
        (http: HttpClient, backend: HttpTestingController, service: TodoService) => {
          const TODO: Todo = {
            id: 0,
            note: 'Note',
            urgency: Urgency.None,
            priority: 0,
            dueDate: new Date(),
            category: '',
            finished: false,
          };
          service.createTodo(TODO).subscribe();

          backend.expectOne((req: HttpRequest<any>) => {
            return req.url === service.defaultURL + 'CreateTodo'
              && req.method === 'PUT'
              && req.body === TODO;
          }, `PUT to 'CreateTodo' with new Todo`);
        })
    )
  );

  it(`it calls updateTodo`,
    async(
      inject([HttpClient, HttpTestingController, TodoService],
        (http: HttpClient, backend: HttpTestingController, service: TodoService) => {
          const TODO: Todo = {
            id: 0,
            note: 'Note',
            urgency: Urgency.None,
            priority: 0,
            dueDate: new Date(),
            category: '',
            finished: false,
          };
          service.updateTodo(TODO).subscribe();

          backend.expectOne((req: HttpRequest<any>) => {
            return req.url === service.defaultURL + 'UpdateTodo'
              && req.method === 'PUT'
              && req.body === TODO;
          }, `PUT to 'UpdateTodo' with updated Todo`);
        })
    )
  );

  it(`it calls deleteTodo`,
    async(
      inject([HttpClient, HttpTestingController, TodoService],
        (http: HttpClient, backend: HttpTestingController, service: TodoService) => {
          const TODO_ID = 1;
          service.deleteTodo(TODO_ID).subscribe();
          backend.expectOne({
            url: service.defaultURL + 'DeleteTodoById/' + TODO_ID,
            method: 'DELETE'
          });
        })
    )
  );
});
