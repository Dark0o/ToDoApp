import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToDoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-to-do-details',
  templateUrl: './to-do-details.component.html',
  styleUrls: ['./to-do-details.component.scss']
})
export class ToDoDetailsComponent implements OnInit, AfterViewInit {

  
  todo;

  constructor(private route: ActivatedRoute, private router: Router, private todoService: ToDoService) { 
    this.todo = this.router.getCurrentNavigation().extras.state;
    console.log(this.todo);
    
  }
  ngAfterViewInit(): void {
    
  }
  

  ngOnInit(): void {

    if(!this.todo){
      this.todoService.getToDos().subscribe((todos) => {

        todos.forEach(todo => {
          if(todo.id === this.route.snapshot.params['id']){

            console.log('whaat');
            console.log(todo);
            
           this.todo = todo;
           console.log(this.todo );
           
          }
        });
      });
    }
    console.log(this.todo);
    }

    

}
