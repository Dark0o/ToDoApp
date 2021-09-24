import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todoItem;
  @Output() itemDeleted = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onItemDeleted(todo){
    console.log(todo);
    
this.itemDeleted.emit(todo);
  }

}
