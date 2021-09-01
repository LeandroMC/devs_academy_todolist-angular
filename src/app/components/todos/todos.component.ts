import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // removeTodo(id: string) {
  //   this.todos = this.todos.filter((todo) => todo.id !== id);
  // }
  private todoService: TodoService = new TodoService();
  public todos: Todo[];

  constructor() {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
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
  }

  handleDropdown(e: Event, todo: Todo) {
    todo.priority = +(<HTMLSelectElement>e.target).value;
  }
}
