import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateFormatter } from 'src/app/DateFormatter';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss'],
})
export class ToDoDetailsComponent implements OnInit {
  todo;
  date;
  showEdit = false;
  isDeleted = false;

  constructor(
    private router: Router,
    private todoService: ToDoService,
    private route: ActivatedRoute
  ) {
    this.todo = this.router.getCurrentNavigation().extras.state;
    console.log(this.todo);
  }

  ngOnInit(): void {
    if (this.todo) {
      this.date = DateFormatter.formatDate(this.todo.createdAt);
    } else {
      this.todoService
        .getToDoById(this.route.snapshot.params.id)
        .subscribe((todo) => {
          this.todo = todo;
          this.date = DateFormatter.formatDate(this.todo.createdAt);
        });
    }
  }

  navigateBack() {
    this.router.navigate(['todos']);
  }

  deleteTodo() {
    this.todoService.deleteToDo(this.todo.id);
    this.todoService.usersToDos = this.todoService.usersToDos.filter(
      (todo) => todo.id !== this.todo.id
    );
    this.isDeleted = !this.isDeleted;
  }

  markImportant() {
    this.todo.isImportant = !this.todo.isImportant;
  }

  markDone() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  edit() {
    this.todoService.updateToDo(this.todo);
    this.showEdit = false;
    console.log('saved');
  }

  onEdit() {
    this.showEdit = true;
  }
}
