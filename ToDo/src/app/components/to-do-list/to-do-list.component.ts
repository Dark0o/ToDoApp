import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {

  todos;
  completed = false;
  filteredTodos;
  date;
  important = false;
  description = '';

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
      console.log(todos);

      this.todos = todos;
      this.performFilter();
      console.log(this.todos);
    });
  }

  selectChangeHandler(event) {
    console.log(event.target.value);
    if (event.target.value === 'name') {
      this.sortByName(this.filteredTodos);
    }
    if (event.target.value === 'newest') {
      this.sortNewest(this.filteredTodos);
      console.log('this happened');
    }
    if (event.target.value === 'oldest') {
      this.sortOldest(this.filteredTodos);
    }
  }

  addToDo(todo) {
    console.log(todo);
    this.toDoService
      .addToDo({
        title: todo,
        description: this.description,
        isImportant: this.important,
        isCompleted: this.completed,
        createdAt: Date.now(),
      })
      .subscribe((response) => {
        console.log(response);
        this.toDoService.todos.push({
          title: todo,
          description: this.description,
        isImportant: this.important,
        isCompleted: this.completed,
          id: response.name,
          createdAt: Date.now(),
        })
        console.log(this.todos);
      });

    //console.log(this.todos);
    console.log(this.filteredTodos);
    console.log(this.toDoService.todos);
  }

  onDelete(todo) {
    console.log(todo);
    console.log('delete');
    this.filteredTodos = this.filteredTodos.filter(
      (item) => item.title !== todo.title
    );
    this.toDoService.deleteToDo(todo.id);
    this.toDoService.todos = this.filteredTodos;
    console.log(this.todos);
  }

  onItemChecked(todo) {
    this.toDoService.updateToDo(todo);
  }

  performFilter(filterBy?) {
    if (filterBy) {
      this.filteredTodos = this.todos.filter(
        (todo) =>
          todo.title
            .toLocaleLowerCase()
            .indexOf(filterBy.toLocaleLowerCase()) !== -1
      );
    } else {
      this.filteredTodos = this.todos;
      console.log('else happened');
    }
  }

  sortByName(arr) {
    arr.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  sortNewest(arr) {
    arr.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
  }

  sortOldest(arr) {
    arr.sort((a, b) => {
      return a.createdAt - b.createdAt;
    });
  }
}
