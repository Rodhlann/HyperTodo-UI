import { Component, OnInit, Renderer2, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Todo, Urgency } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  inputs: ['todo'],
  outputs: ['setTodoToFinished'],
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  editing: Boolean = false;
  input: string;
  placeholder = 'New note!';
  public todo: Todo;
  setTodoToFinished = new EventEmitter();
  @ViewChild('noteInput') noteInput;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }

  onClick(event): void {
    this.editing = !this.editing;
    setTimeout(() => {
      const input = this.renderer.selectRootElement('#todo-' + this.todo.id);
      input.focus();
    }, 0);
  }

  toggleFinished() {
    setTimeout(() => {
      this.todo.finished = !this.todo.finished;
      this.setTodoToFinished.next(this.todo.id);
    }, 100);
  }

  stopEditing(event) {
    this.todo.note = (this.input || this.noteInput.nativeElement.value) || this.todo.note;
    this.input = '';
    this.editing = !this.editing;
  }
}
