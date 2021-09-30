import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss'],
})
export class ToDoInputComponent implements OnInit {
  todo;
  @Output() onToDoAdded = new EventEmitter<string>();

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {}

  onAddToDo(todo) {
    this.onToDoAdded.emit(todo);
    this.todo = '';
  }
}
