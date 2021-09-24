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

  ngOnInit(){
    
    
   this.toDoService.getToDos().subscribe(todos => {
    console.log(todos);
    this.todos = todos;
  });
  console.log(this.todos);
  
  }

  onDelete(todo){
    console.log(todo);
    console.log('delete');
    this.todos = this.todos.filter(item => item.title !== todo);
    //this.toDoService.deleteTodo(todo);
    console.log(this.todos);
    
  }


  // ngAfterContentChecked(){
  //   this.todos = this.toDoService.getToDos();
  //   console.log(this.todos);
  //   console.log('afterContentChecked');
  // }
}
