import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos = [
    {
      id: Math.random().toString(16),
      text: 'Vestibulum sed magna at nunc commodo placerat.',
      priority: 2,
      done: false,
    },
    {
      id: Math.random().toString(16),
      text: 'Nullam porttitor lacus at turpis.',
      priority: 1,
      done: true,
    },
    {
      id: Math.random().toString(16),
      text: 'Nulla mollis molestie lorem. Quisque ut erat.',
      priority: 3,
      done: false,
    },
    {
      id: Math.random().toString(16),
      text: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
      priority: 3,
      done: false,
    },
    {
      id: Math.random().toString(16),
      text: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
      priority: 2,
      done: false,
    },
    {
      id: Math.random().toString(16),
      text: 'Morbi vel lectus in quam fringilla rhoncus.',
      priority: 2,
      done: true,
    },
    {
      id: Math.random().toString(16),
      text: 'Aliquam non mauris.',
      priority: 3,
      done: true,
    },
    {
      id: Math.random().toString(16),
      text: 'In hac habitasse platea dictumst.',
      priority: 2,
      done: true,
    },
    {
      id: Math.random().toString(16),
      text: 'Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      priority: 2,
      done: false,
    },
    {
      id: Math.random().toString(16),
      text: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
      priority: 1,
      done: true,
    },
  ];

  removeTodo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  constructor() {}

  ngOnInit(): void {}
}
