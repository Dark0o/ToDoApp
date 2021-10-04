import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  //todos = [];
  url =
    'https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json';
  usersToDos = [];

  constructor(private http: HttpClient) {}

  getToDos(id?): Observable<any> {
    // if (this.todos.length > 0) {
    //   return of(this.todos);
    // }

    return this.http.get(this.url).pipe(
      map((responseData) => {
        //console.log(responseData);
        const todos = [];
        for (const key in responseData) {
          //  console.log(key);

          //  console.log({...responseData[key]});

          todos.push({ ...responseData[key], id: key });
          this.usersToDos = todos.filter((todo) => todo.userID === id);
        }
        console.log(this.usersToDos);

        return todos;
      })
    );
  }

  getToDoById(id) {
    return this.http.get(
      `https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
    );
  }

  addToDo(todo: ITodo): Observable<any> {
    console.log(todo);

    return this.http.post(this.url, todo);
  }

  updateToDo(todo) {
    console.log(todo);

    this.http
      .patch(
        `https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}.json`,
        todo
      )
      .subscribe();
  }

  deleteToDo(id) {
    this.http
      .delete(
        `https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`
      )
      .subscribe();
  }
}
