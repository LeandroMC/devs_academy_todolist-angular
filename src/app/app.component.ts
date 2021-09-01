import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from './models/Todo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TodoList-angular';

  // private todoService: TodoService = new TodoService();

  // setNewTodo(todoName: any) {
  //   this.todoService.addTodo(new Todo(todoName));
  //   console.log(todoName);
  // }
}
