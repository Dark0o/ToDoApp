import {  Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from '../services/todo.service';

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

  addToDo(todo) {
    console.log(todo);
    this.toDoService
      .addToDo({ title: todo, isCompleted: this.completed, createdAt: Date.now()})
      .subscribe((response) => {
        console.log(response);
        this.todos.push({ title: todo, id: response.name, createdAt: Date.now()});
        console.log(this.todos);
      });

    console.log(this.todos);
  }

  onDelete(todo) {
    console.log(todo);
    console.log('delete');
    this.filteredTodos = this.filteredTodos.filter(
      (item) => item.title !== todo.title
    );
    this.toDoService.deleteToDo(todo.id);
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
}
