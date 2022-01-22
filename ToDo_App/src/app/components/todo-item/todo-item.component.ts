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

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(toDo: IToDo) {
    console.log("Trying to Delete ToDo: ", toDo);
    this.handleDelete.emit(toDo);
  }
}
