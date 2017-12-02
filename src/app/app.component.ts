import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = '有話快說';
  colspan = 2;

  todos: Array<any> = [];


  addTodo($event) {
    console.log($event);
    this.todos = this.todos.concat($event.target.value);

  }
}
