import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  todos = [
    {  title: 'Read a book' },
    { title: 'Go for a run' },
    { title: 'Take out the trash' }
  ];

  constructor() { }

  getToDos(){
    return this.todos;
  }

  addToDo(todo){
    this.todos.push(todo);
    console.log(this.todos);
  }
}
