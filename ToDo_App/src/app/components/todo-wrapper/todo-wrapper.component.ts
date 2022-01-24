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

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    console.log("ON INIT")
    // this.todos = this.todoService.getToDos();
    this.todoService.getToDos().subscribe((todoArray) => this.todos = todoArray);
  }

  toggleFormActive() {
    this.formActive = !this.formActive;
  };

  handleDelete(todo: IToDo) {
    console.log("Deleting Task");
    this.todoService.deleteToDo(todo).subscribe(() => {
      // this.todos = this.todos.filter(t => t.id !== todo.id);
      this.todoService.getToDos().subscribe((todoArray) => this.todos = todoArray);
    })
  }

  handleCreateToDo(todo: string) {
    console.log(`New To Do: "${todo}"`);
    
  }
}
