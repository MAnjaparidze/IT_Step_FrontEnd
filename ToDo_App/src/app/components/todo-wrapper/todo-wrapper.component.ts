import { Component, OnInit, Input } from '@angular/core';
import { TasksArray } from "../../mock-tasks";
import { ITask } from '../../interfaces/ITask';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})

export class TodoWrapperComponent implements OnInit {
  tasks: ITask[] = TasksArray;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("Baro Baro");
  }

  toggleDeleteTask() {
    console.log("Deleting Task")
  }

  addNewToDo(todo: string) {
    console.log(`New To Do: "${todo}"`)
  }
}
