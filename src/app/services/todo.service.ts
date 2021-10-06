import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  url = 'https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json';
  usersTodos = [];

  constructor(private http: HttpClient) {}

  getTodos(id?): Observable<any> {
    // if (this.todos.length > 0) {
    //   return of(this.todos);
    // }

    return this.http.get(this.url).pipe(
      map((responseData) => {
        const todos = [];
        for (const key in responseData) {
          todos.push({ ...responseData[key], id: key });
          this.usersTodos = todos.filter((todo) => todo.userID === id);
        }
        console.log(this.usersTodos);

        return todos;
      })
    );
  }

  getTodoById(id) {
    return this.http.get(`https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`);
  }

  addTodo(todo: ITodo): Observable<any> {
    return this.http.post(this.url, todo);
  }

  updateTodo(todo) {
    console.log(todo);

    return this.http.patch(
      `https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}.json`,
      todo
    );
  }

  deleteTodo(id) {
    return this.http.delete(`https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`);
  }
}
