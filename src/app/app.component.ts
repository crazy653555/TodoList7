import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  inputHint = "有話快說";
  colspan = 2;
  filterType = "All";
  selectAll: boolean:false;

  todos: Array<any> = [];
  todo = "";

  addTodo() {
    if (this.todo) {
      const newTodo = {
        text: this.todo,
        done: false
      };
      this.todos = this.todos.concat(newTodo);
      this.todo = "";
    }
  }

  clearCompleted() {
    this.todos = this.todos.filter(item => !item.done);
  }

  updateFilterType($event) {
    this.filterType = $event;
    console.log(this.filterType);
  }

  toggleAll(){
    this.todos.forEach(item => item.done = this.selectAll);
  }
}
