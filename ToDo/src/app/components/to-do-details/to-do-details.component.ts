import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit {

  todoID;
  todo;

  constructor(private route: ActivatedRoute, private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoID = this.route.snapshot.params['id'];
    console.log(this.todoID);
    this.todo = this.todoService.getToDoById(this.todoID);
    console.log(this.todo);
  }

}
