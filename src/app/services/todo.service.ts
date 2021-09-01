import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

const todos: Todo[] = [
  new Todo('Vestibulum sed magna at nunc commodo placerat.', 2, false),
  new Todo('Nullam porttitor lacus at turpis.', 1, true),
  new Todo('Nulla mollis molestie lorem. Quisque ut erat.', 3, false),
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos(): Todo[] {
    return todos;
  }

  addTodo(todo: Todo): void {
    todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    todos.splice(todos.indexOf(todo), 1);
  }
  constructor() {}
}
