import { Component, OnInit, Renderer2, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { Todo, Urgency } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent {
  @ViewChild('noteInput')
  noteInput;

  public editing: Boolean = false;
  public input: string;
  public placeholder = 'New note!';

  @Input()
  todo: Todo;

  @Output()
  toggleTodoFinished = new EventEmitter<Todo>();
  @Output()
  deleteTodo = new EventEmitter<Todo>();
  @Output()
  updateTodo = new EventEmitter<Todo>();

  constructor(private renderer: Renderer2) { }

  onClick(): void {
    this.editing = !this.editing;
    if (this.editing) {
      setTimeout(() => {
        const input = this.renderer.selectRootElement('#todo-' + this.todo.id);
        input.focus();
      }, 0);
    }
  }

  deleteTodoAction() {
    this.editing = false;
    this.deleteTodo.emit(this.todo);
  }

  toggleFinished() {
    setTimeout(() => {
      this.toggleTodoFinished.emit(this.todo);
    }, 100);
  }

  stopEditing(event) {
    this.todo.note = (this.input || (this.noteInput && this.noteInput.nativeElement.value)) || this.todo.note;
    this.input = '';
    this.editing = !this.editing;
    this.updateTodo.emit(this.todo);
  }
}
