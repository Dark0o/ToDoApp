import {  Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  todos;
  completed;
  filteredTodos;

  private _filter;

  get filter() {
    return this._filter;
  }

  set filter(value) {
    this._filter = value;
    this.performFilter(this.filter);
  }

  constructor(private toDoService: ToDoService) {}

  ngOnInit() {
    this.toDoService.getToDos().subscribe((todos) => {
      this.todos = todos;
      this.performFilter(this.filter);
      console.log(this.todos);
    });
  }

  addToDo(todo) {
    console.log(todo);
    this.toDoService
      .addToDo({ title: todo, isCompleted: this.completed })
      .subscribe((response) => {
        console.log(response);
        this.todos.push({ title: todo, id: response.name });
      });

    console.log(this.todos);
  }

  onDelete(todo) {
    console.log(todo);
    console.log('delete');
    this.todos = this.todos.filter((item) => item.title !== todo.title);
    this.toDoService.deleteToDo(todo.id);
    console.log(this.todos);
  }

  onItemChecked(completed) {
    this.completed = completed;
    console.log(completed);
  }

  performFilter(filterBy) {
    if (filterBy) {
      this.filteredTodos = this.todos.filter(
        (todo) =>
          todo.title
            .toLocaleLowerCase()
            .indexOf(filterBy.toLocaleLowerCase()) !== -1
      );
    } else {
      this.filteredTodos = this.todos;
    }
  }
}
