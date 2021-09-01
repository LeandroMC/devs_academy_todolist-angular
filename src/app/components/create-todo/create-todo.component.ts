import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent implements OnInit {
  @Output() createTodoEmitter: EventEmitter<string> = new EventEmitter();

  newTodoName: string = '';
  todoService: TodoService = new TodoService();

  constructor() {}

  ngOnInit(): void {}

  setNewTodoName(e: Event) {
    this.newTodoName = (<HTMLInputElement>e.target).value;
    console.log(this.newTodoName);
  }

  createNewTodo(): void {
    if (!this.newTodoName) {
      alert('Por favor digite uma descrição para a tarefa!');
      return;
    }
    this.todoService.addTodo(new Todo(this.newTodoName));
    this.newTodoName = '';
    console.log(`A new task was created: `);
    console.log(this.todoService.getTodos().slice(-1));
    console.log(this.todoService.getTodos());
  }
}
