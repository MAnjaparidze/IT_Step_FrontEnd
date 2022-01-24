import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { IToDo } from '../interfaces/IToDo';
// import { ToDoArray } from "../mock-tasks";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiURL = "http://localhost:5000/todos";

  constructor(private http: HttpClient) { }

  // getToDos(): IToDo[] {
  //   return ToDoArray;
  // }

  // getToDos(): Observable<IToDo[]> {
  //   const todos = of(ToDoArray);
  //   return todos;
  // }

  getToDos(): Observable<IToDo[]> {
    return this.http.get<IToDo[]>(this.apiURL);
  }

  deleteToDo(todo: IToDo): Observable<IToDo> {
    const url = `${this.apiURL}/${todo.id}`;
    return this.http.delete<IToDo>(url);
  }
}