import { Component, OnInit, Renderer2, Input } from '@angular/core';
import { Todo, Urgency } from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  inputs: ['todo'],
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  editing: Boolean = false;
  input: string;
  placeholder = 'New note!';
  public todo: Todo;

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
    }, 100);
  }

  onKey(event: any) {
    if (event.key === 'Enter') {
      this.todo.note = (this.input || event.target.value) || this.todo.note;
      this.input = '';
      this.editing = !this.editing;
    }
  }
}
