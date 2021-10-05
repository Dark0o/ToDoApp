import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-shared-todos-list',
  templateUrl: './shared-todos-list.component.html',
  styleUrls: ['./shared-todos-list.component.scss'],
})
export class SharedTodosListComponent implements OnInit {
  todo;
  sharedTodos = [];

  constructor(private todosService: ToDoService) {}

  ngOnInit(): void {
    this.todosService.getToDos().subscribe((todos) => {
      this.sharedTodos = todos.filter((todo) => todo.isPublic === true);
      console.log(this.sharedTodos);
    });
  }

  onAddToDo(todo) {}
}
