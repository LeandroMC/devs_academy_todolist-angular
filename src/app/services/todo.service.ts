import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

const todos: Todo[] = [];

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

  deleteTodo(todo: Todo): Todo[] {
    return todos.splice(todos.indexOf(todo), 1);
  }

  isDone(todo: Todo): void {
    todos[todos.indexOf(todo)].done = !todos[todos.indexOf(todo)].done;
  }
  constructor() {}
}
