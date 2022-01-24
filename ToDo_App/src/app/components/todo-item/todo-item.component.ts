import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IToDo } from 'src/app/interfaces/IToDo';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: IToDo;
  @Output() handleDelete: EventEmitter<IToDo> = new EventEmitter();
  faTimes = faTimes;

  isDone = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleToDoFinish() {
    this.isDone = !this.isDone;
  }

  onDeleteClick(toDo: IToDo) {
    console.log("Trying to Delete ToDo: ", toDo);
    this.handleDelete.emit(toDo);
  }

  currentStyles = {
    "color": this.isDone ? "green" : "black",
    "font-style": this.isDone ? "italic" : "normal",
    "font-weight": this.isDone ? "bold" : "normal"
  }
}
