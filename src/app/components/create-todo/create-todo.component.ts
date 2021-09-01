import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  @Output() createTodoEmitter: EventEmitter<string> = new EventEmitter();

  newTodoName: string = '';

  constructor() {}

  ngOnInit(): void {}

  // addTodo(e: any): void {
  //   this.newTodoName = e.target.value;
  //   this.createTodoEmitter.emit(this.newTodoName);
  //   this.newTodoName = '';
  //   console.log('test');
  // }
}
