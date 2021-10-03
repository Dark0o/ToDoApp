import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent {
  todo;
  @Output() onToDoAdded = new EventEmitter<string>();

  onAddToDo(todo) {
    this.onToDoAdded.emit(todo);
    this.todo = '';
  }
}
