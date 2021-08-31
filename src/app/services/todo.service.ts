import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

const todos: Todo[] = [
  {
    text: 'Vestibulum sed magna at nunc commodo placerat.',
    priority: 2,
    done: false,
  },
  {
    text: 'Nullam porttitor lacus at turpis.',
    priority: 1,
    done: true,
  },
  {
    text: 'Nulla mollis molestie lorem. Quisque ut erat.',
    priority: 3,
    done: false,
  },
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
  constructor() {}
}
