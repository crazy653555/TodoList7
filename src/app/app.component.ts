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
  todo = '';

  addTodo() {
    if (this.todo) {
      this.todos = this.todos.concat(this.todo);
      this.todo = '';
    }

  }
}
