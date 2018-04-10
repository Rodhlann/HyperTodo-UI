import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { Todo, Urgency } from '../../models/todo';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TodosComponent ]
    })
    .compileComponents();
  }));

  const TODO: Todo = {
    id: 0,
    note: 'Note',
    urgency: Urgency.None,
    priority: 0,
    dueDate: new Date(),
    category: '',
    finished: false,
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    component.todo = TODO;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
