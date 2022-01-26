import { Component, OnInit } from '@angular/core';
// import { ToDoArray } from "../../mock-tasks";
import { IToDo } from '../../interfaces/IToDo';

import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})

export class TodoWrapperComponent implements OnInit {
  todos: IToDo[] = [];
  formActive: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todos = this.todoService.getToDos();
    this.handleGetToDos();
  }

  handleGetToDos() {
    this.todoService.getToDos().subscribe((todoArray) => this.todos = todoArray);
  }

  toggleFormActive() {
    this.formActive = !this.formActive;
  };

  handleDelete(todo: IToDo) {
    console.log("Deleting Task");
    this.todoService.deleteToDo(todo).subscribe(() => {
      // this.todos = this.todos.filter(t => t.id !== todo.id);
      this.handleGetToDos();
    })
  }

  handleCreateToDo(todoObject: IToDo) {
    let sorted = this.todos.sort((a: any, b: any) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)

    for(let i = 0; i < sorted.length; i++) {
      if(i !== sorted[i].id) {
        todoObject.id = i;
        break;
      }
    }

    if(!todoObject.id) {
      todoObject.id = this.todos.length;
    }

    this.todoService.createToDo(todoObject).subscribe(() => {
      this.handleGetToDos();
    })
  }
}
