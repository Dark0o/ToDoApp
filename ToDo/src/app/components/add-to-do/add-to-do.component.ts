import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.scss'],
})
export class AddToDoComponent implements OnInit {
  title;
  description;
  important = false;
  completed = false;

  constructor(private todoService: ToDoService, private router: Router) {}

  ngOnInit(): void {}

  addNewToDo() {
    this.todoService
      .addToDo({
        title: this.title,
        description: this.description,
        isImportant: this.important,
        isCompleted: this.completed,
        createdAt: Date.now(),
      })
      .subscribe((data) => {
        this.todoService.todos.push({
          id: data.name,
          title: this.title,
          description: this.description,
          isImportant: this.important,
          isCompleted: this.completed,
          createdAt: Date.now(),
        });
      });
    this.router.navigate(['todos']);
  }

  markImportant() {
    this.important = !this.important;
    console.log(this.important);
  }
}
