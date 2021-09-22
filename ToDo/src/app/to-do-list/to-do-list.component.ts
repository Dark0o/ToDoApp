import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  
  todos;

  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
  this.todos = this.toDoService.getToDos();
  }
  
}
