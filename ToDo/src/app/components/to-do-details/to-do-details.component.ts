import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DateFormatter } from 'src/app/DateFormatter';
import { ITodo } from 'src/app/model/todo';
import { ToDoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss'],
})
export class ToDoDetailsComponent implements OnInit {
  todo;
  date: string;
  showEdit: boolean = false;
  isDeleted: boolean = false;
  editStatus: string;
  deleteStatus: string;

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
    this.deleteStatus = 'Deleteing...';
    this.todoService.usersToDos = this.todoService.usersToDos.filter(
      (todo) => todo.id !== this.todo.id
    );
    this.todoService.deleteToDo(this.todo.id).subscribe(() => {
      this.deleteStatus = 'ToDo Deleted!';
      setTimeout(() => {
        this.router.navigate(['todos']);
      }, 3000);
    });
    this.isDeleted = !this.isDeleted;
  }

  markImportant() {
    this.todo.isImportant = !this.todo.isImportant;
  }

  markDone() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }
  markPublic() {
    this.todo.isPublic = !this.todo.isPublic;
  }

  edit() {
    this.editStatus = 'Editing...';
    this.todoService.updateToDo(this.todo).subscribe(() => {
      this.editStatus = 'Edited!';
      setInterval(() => {
        this.showEdit = false;
        this.editStatus = undefined;
      }, 3000);
    });
    this.showEdit = false;
    console.log('saved');
  }

  onEdit() {
    this.showEdit = true;
  }

  cancelEditing() {
    this.showEdit = false;
  }
}
