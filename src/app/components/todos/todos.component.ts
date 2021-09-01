import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  private todoService: TodoService = new TodoService();
  public todos: Todo[];

  constructor() {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    const deleted: Todo[] = this.todoService.deleteTodo(todo);
    alert(`The task: ${deleted[0].text} was permanently deleted`);
    console.log(this.todoService.getTodos());
  }

  handleCheckbox(todo: Todo) {
    const checkbox = <HTMLInputElement>(
      document.getElementById(`checkbox-${todo.id}`)
    );
    const text = document.getElementById(`text-${todo.id}`);
    if (checkbox.checked) {
      todo.done = true;
      text?.classList.add('done');
    } else {
      todo.done = false;
      text?.classList.remove('done');
    }
    console.log(
      `Task completion status change on todo index: ${this.todoService
        .getTodos()
        .indexOf(todo)}`
    );
    console.log(this.todoService.getTodos());
  }

  handleDropdown(e: Event, todo: Todo) {
    todo.priority = +(<HTMLSelectElement>e.target).value;
    console.log(
      `Task priority change on todo index: ${this.todoService
        .getTodos()
        .indexOf(todo)}}`
    );
    console.log(this.todoService.getTodos());
  }
}
