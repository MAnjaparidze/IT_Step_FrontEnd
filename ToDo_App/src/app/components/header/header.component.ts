import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
    // ამის შიგნით რაც დაიწერება ის განხორციელდება იქამდე
    // სანამ ჩაიტვირთება ამ ფაილის HTML
  }

  toggleAddTask() {
    console.log("Baro Baro");
  }

  toggleDeleteTask() {
    console.log("Deleting Task")
  }
}
