import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITodo  } from '../model/todo';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  todos = [];
  todo;

  constructor(private http:HttpClient){}

  getToDos() :Observable<any>{
    if(this.todos.length > 0){
      return of(this.todos);
    }

   return this.http.get('https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
   .pipe(map(responseData => {
     //console.log(responseData);
     
     
     for(const key in responseData){
      //  console.log(key);
       
      //  console.log({...responseData[key]});
       
      this.todos.push({...responseData[key], id: key});
     }
     console.log(this.todos);
     
     return this.todos;

   }))
  }

  getToDoById(id){
return this.todos.filter(todo => todo.id === id);
  }

  addToDo(todo: ITodo):Observable<any>{
    console.log(todo);
    
   return this.http.post('https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json',todo );
     
  }

 updateToDo (todo){
   console.log(todo);
   
   this.http.patch(`https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${todo.id}.json`, todo).subscribe();
 }

  deleteToDo(id){
    console.log(id);
   
    
     this.http.delete(`https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`).subscribe();
     
    }

  
}
