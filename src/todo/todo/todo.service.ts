import { Injectable } from '@nestjs/common';
import { todos } from './todo-mock';
import { TodoDTO } from './todo.dto';

@Injectable()
export class TodoService {
  private todosData: TodoDTO[] = todos;

  getAll(): TodoDTO[] {
    return this.todosData;
  }

  get(id: string): TodoDTO {
    return this.todosData.find((x: TodoDTO) => x.id === id);
  }

  create(newTodo: any): TodoDTO {
    const todo: TodoDTO = { id: this.todosData.length + 1, ...newTodo };
    this.todosData.push(todo);
    return todo;
  }

  updateTodo(updateTodo: TodoDTO, id: string): TodoDTO {
    const data = this.todosData.find((x: TodoDTO) => x.id === id);
    data.title = updateTodo.title;
    data.status = updateTodo.status;
    return data;
  }

  delete(id: string): any {
    const deletedTodo = this.todosData.find((todo: TodoDTO) => todo.id === id);
    this.todosData = this.todosData.filter((todo: TodoDTO) => todo.id !== id);
    return deletedTodo;
  }
}
