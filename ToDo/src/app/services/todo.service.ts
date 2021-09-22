import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  todos = [
    { id: 1, title: 'Read a book' },
    { id: 2, title: 'Go for a run' },
    { id: 3, title: 'Take out the trash' }
  ];

  constructor() { }

  getToDos(){
    return this.todos;
  }

}
