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
  public = false;
  userId;

  constructor(private todoService: ToDoService, private router: Router) {
    this.userId = localStorage.getItem('userID');
  }

  ngOnInit(): void {}

  addNewToDo() {
    this.todoService
      .addToDo({
        id: null,
        title: this.title,
        description: this.description,
        isImportant: this.important,
        isCompleted: this.completed,
        isPublic: this.public,
        createdAt: Date.now(),
        userID: this.userId,
      })
      .subscribe((data) => {
        this.todoService.usersToDos.push({
          id: data.name,
          title: this.title,
          description: this.description,
          isImportant: this.important,
          isCompleted: this.completed,
          createdAt: Date.now(),
          userID: this.userId,
        });
      });
    this.router.navigate(['todos']);
  }

  markImportant() {
    this.important = !this.important;
    console.log(this.important);
  }
}
