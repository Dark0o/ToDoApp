import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.scss']
})
export class ToDoInputComponent implements OnInit {

  todo;

  constructor() { }

  ngOnInit(): void {
  }

}
