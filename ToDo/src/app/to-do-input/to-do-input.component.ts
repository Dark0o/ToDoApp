import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent implements OnInit {

  todo;

  constructor(private toDoService:ToDoService) { }

  ngOnInit(): void {

  }

  onAddToDo(){
this.toDoService.addToDo({title: this.todo});
  }

}
