import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss']
})
export class AddToDoComponent implements OnInit {

  title;
  description;
  important;
  completed = false;


  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  }

  addNewToDo(){
this.todoService.addToDo({
  title: this.title,
  description: this.description,
  isImportant: this.important,
  isCompleted: this.completed,
  createdAt: Date.now()
}).subscribe((data) => {
  this.todoService.todos.push({
    id: data.name,
    title: this.title,
    description: this.description,
    isImportant: this.important,
    isCompleted: this.completed,
    createdAt: Date.now(),
  });
});

  }

}
