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

  @Output() handleInputChange: EventEmitter<any> = new EventEmitter();

  inputValue: string = "";

  @Output() addToDo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    this.handleInputChange.emit(event);
  }

  handleKeyPress(event: any) {
    const { name, value } = event.target;
    
    console.log(event);
    console.log(name, " [INPUT NAME]");
    console.log(value, " [INPUT VALUE]");
    this.addToDo.emit(value);
  }
}