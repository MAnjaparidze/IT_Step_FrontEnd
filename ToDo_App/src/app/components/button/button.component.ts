import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html', // HTML
  styleUrls: ['./button.component.css'] // CSS,
})

// Javascript
export class ButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Input() btnTextColor: string | undefined;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log("First Step ", this.text, this.color);
    this.btnClick.emit();
  }
}