import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  
  todos = [
    { id: 1, title: 'Read a book' },
    { id: 2, title: 'Go for a run' },
    { id: 3, title: 'Take out the trash' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
