import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  inputHint = "有話快說";
  colspan = 2;
  filterType = "All";
  selectAll: boolean:false;

  todos: Array<any> = [];
  todo = "";
  baseApi = 'http://localhost:3000/todos';

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<any[]>(this.baseApi).subscribe(data => {
      this.todos = data;
    });
  }

  addTodo() {
    if (this.todo) {
      const newTodo = {
        text: this.todo,
        done: false
      };

      this.http.post<any[]>(this.baseApi, newTodo)
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
    this.http.delete(`${this.baseApi}/${todo.id}`)
    .subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    });
  }

  updateTodo(todo){
    this.http.put(`${this.baseApi}/${todo.id}`, todo)
    .subscribe();
  }
}
