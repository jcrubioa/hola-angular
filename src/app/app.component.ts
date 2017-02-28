import { Component } from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
	constructor(private todoDataService: TodoDataService){

	}

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
  }

	toggleTodoComplete(todo){
		this.todoDataService.toggleTodoComplete(todo);
	}

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodos(){
    return this.todoDataService.getAllTodos();
  }


}
