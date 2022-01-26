import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputType: string;
  @Input() inputLabel: string;
  @Input() inputName: string;

  @Input() inputValue: string;

  // todo-form =todoName= + inputValue + HTMLInputElement

  @Output() inputValueChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}