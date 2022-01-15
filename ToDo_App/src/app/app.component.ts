import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // როგორ შეგვიძლია მივწვდეთ ამ ფაილს
  templateUrl: './app.component.html', // რა უნდა გამოაჩინოს ამ ფაილმა
  styleUrls: ['./app.component.css'] // ამ ფაილის CSS
})
export class AppComponent {
  title = 'Todo_App';
}
