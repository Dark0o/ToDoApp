import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  getToDos() :Observable<any>{

   return this.http.get('https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
   .pipe(map(responseData => {
     const todosArray = [];
     //console.log( responseData);
     
     for(const key in responseData){
      //  console.log(key);
       
      //  console.log({...responseData[key]});
       
      todosArray.push({...responseData[key], id: key});
     }
     return todosArray;
   }))
  }

  addToDo(todo):Observable<any>{
    console.log(todo);
    
   return this.http.post('https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos.json',todo );
     
    
  }

  deleteToDo(id:string){
    return this.http.delete(`https://todo-app-2e14b-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`).subscribe();
    }
  
}
