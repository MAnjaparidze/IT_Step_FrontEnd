import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IToDo } from 'src/app/interfaces/IToDo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})


export class TodoFormComponent implements OnInit {
  todoName: string = "";
  day: string = "";

  @Output() createToDo: EventEmitter<IToDo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log("Added New Task: ", this.todoName, this.day);
    this.createToDo.emit({ todoName: this.todoName, day: this.day })
  }
}
