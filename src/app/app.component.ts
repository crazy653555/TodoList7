import { Component, OnInit, transition } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  inputHint = "有話快說";
  colspan = 2;
  filterType = "All";
  selectAll: boolean＝false;

  todos: Array<any> = [];
  todo = "";

  constructor(private dataSev: DataService){}

  ngOnInit(): void {
    this.dataSev.getTodos().subscribe(data => {
      this.todos = data;
    });
  }

  addTodo() {
    if (this.todo) {
      const newTodo = {
        text: this.todo,
        done: false
      };

      this.dataSev.postTodo(newTodo)
        .subscribe( data => {
          this.todos = this.todos.concat(newTodo);
          this.todo = '';
        });

    }
  }

  clearCompleted() {
    this.todos.filter(item => item.done)
    .forEach(item => {
      this.removeTodo(item);
    });
  }

  updateFilterType($event) {
    this.filterType = $event;
    console.log(this.filterType);
  }

  toggleAll(){
    this.todos.forEach(item => {
      item.done = this.selectAll;
      this.updateTodo(item);
    });
  }

  removeTodo(todo){
    this.dataSev.removeTodo(todo)
    .subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    });
  }

  updateTodo(todo){
    console.log('updateTodo');
    this.dataSev.updateTodo(todo)
    .subscribe();
  }

  enterEditMode(todo){
    console.log('enterEditMode()');
    todo.editText = todo.text;
    todo.isEditMode = true;
  }

  saveEdit(todo) {
        todo.text = todo.editText;
        this.leaveEditMode(todo);
      }

  leaveEditMode(todo){
    console.log('leaveEditMode()');
    delete todo.editText;
    delete todo.isEditMode;
    this.updateTodo(todo);
  }
}
