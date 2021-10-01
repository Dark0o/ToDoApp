import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: ToDoService
  ) {
    this.todo = this.router.getCurrentNavigation().extras.state;
    console.log(this.todo);
  }

  ngOnInit(): void {
    if (this.todo) {
      this.date = DateFormatter.formatDate(this.todo.createdAt);
    }

    // if(!this.todo){
    //   this.todoService.getToDos().subscribe((todos) => {

    //     todos.forEach(todo => {
    //       if(todo.id === this.route.snapshot.params['id']){

    //         console.log('whaat');
    //         console.log(todo);

    //        this.todo = todo;
    //        console.log(this.todo );

    //       }
    //     });
    //   });
    // }
    // console.log(this.todo);
    // }
  }

  navigateBack() {
    this.router.navigate(['todos']);
  }

  deleteTodo() {
    this.todoService.deleteToDo(this.todo.id);
    this.todoService.todos = this.todoService.todos.filter((todo) => todo.id !== this.todo.id)
  }

  markImportant(){
this.todo.isImportant = !this.todo.isImportant;
  }

  markDone(){
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  edit(){
this.todoService.updateToDo(this.todo);
this.showEdit = false;
console.log('saved');
  }

  onEdit(){
this.showEdit = true;
  }

}