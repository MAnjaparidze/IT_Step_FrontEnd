import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html', // HTML
  styleUrls: ['./button.component.css'] // CSS,
})

// Javascript
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() btnTextColor: string;
  @Input() type: string;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}