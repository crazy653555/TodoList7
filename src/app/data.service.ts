import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
  baseApi = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<any[]>(this.baseApi);
  }

  postTodo(todo) {
    return this.http.post<any[]>(this.baseApi, todo);
  }

  removeTodo(todo) {
    return this.http.delete(`${this.baseApi}/${todo.id}`);
  }
  updateTodo(todo) {
    return this.http.put(`${this.baseApi}/${todo.id}`, todo);
  }
}
