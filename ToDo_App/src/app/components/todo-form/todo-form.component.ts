import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})


export class TodoFormComponent implements OnInit {
  // @Output
  todoObject = {
    todoName: '',
    dueDate: '',
  }

  constructor() { }

  ngOnInit(): void {
  }


    handleInputChange(event: any) {
      let { name, value } = event.target as HTMLInputElement;
      console.log(name, value, " [ON CHANGE]");
    }

    handleSubmit() {
      console.log("Test", this.todoObject.todoName);
    }
  }
