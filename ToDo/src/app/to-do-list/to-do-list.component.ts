import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  todos;

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.getToDos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }

  addToDo(todo) {
    console.log(todo);
    this.toDoService.addToDo({ title: todo });
    this.todos.push({ title: todo });
    console.log(this.todos);
  }

  onDelete(todo) {
    console.log(todo);
    console.log('delete');
    this.todos = this.todos.filter((item) => item.title !== todo.title);
    this.toDoService.deleteToDo(todo.id);
    console.log(this.todos);
  }
}
