import { Injectable } from '@nestjs/common';
import { todos } from './todo-mock';
import { TodoDTO } from './todo.dto';

@Injectable()
export class TodoService {
  private readonly todosData: TodoDTO[] = todos;

  GetAll(): TodoDTO[] {
    return this.todosData;
  }

  findOne(id: string): TodoDTO {
    console.log(id);
    return this.todosData.find((x: TodoDTO) => x.id === id);
  }
}
