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

  it('edits a todo', () => {
    component.deleteTodoAction();

    const nativeElement = fixture.nativeElement;
    const editButton = nativeElement.querySelector('.todo-action-edit');

    editButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const editField = nativeElement.querySelector('#todo-' + TODO.id);

    expect(component.editing);
    expect(editField).toBeTruthy();
  });

  it('deletes a todo', () => {
    component.deleteTodoAction();
    spyOn(component.deleteTodo, 'emit');

    const nativeElement = fixture.nativeElement;
    const editButton = nativeElement.querySelector('.todo-action-edit');

    editButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const deleteButton = nativeElement.querySelector('#delete-todo-' + TODO.id);

    deleteButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(!component.editing);
    expect(component.deleteTodo.emit).toHaveBeenCalled();
  });

  it('sets a todo to finished', () => {
    component.toggleFinished();
    spyOn(component.toggleTodoFinished, 'emit');

    const nativeElement = fixture.nativeElement;
    const toggleButton = nativeElement.querySelector('.todo-toggle');

    toggleButton.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    setTimeout(() => {
      expect(component.toggleTodoFinished.emit).toHaveBeenCalled();
    }, 100);
  });

  it('stops editing a todo', () => {
    component.stopEditing(event);
    spyOn(component.updateTodo, 'emit');

    const nativeElement = fixture.nativeElement;
    const editButton = nativeElement.querySelector('.todo-action-edit');

    editButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    editButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(!component.editing);
    expect(component.updateTodo.emit(TODO));
  });
});
