import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { todos } from './todo-mock';
import { TodoService } from './todo.service';

let todosData = todos;

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): TodoDTO[] {
    return this.todoService.GetAll();
  }

  @Get(':id')
  getTodo(@Param('id') id: string): TodoDTO {
    return this.todoService.findOne(id);
  }

  @Post()
  createTodo(@Body() createTodo: TodoDTO): TodoDTO {
    const newTodo: TodoDTO = {
      id: (todosData.length + 1).toString(),
      ...createTodo,
    };

    todosData = [...todosData, newTodo];

    return newTodo;
  }

  @Put(':id')
  updateTodo(@Body() updateTodo: TodoDTO, @Param('id') id): TodoDTO {
    todosData = todosData.map((todo) => (todo.id === id ? updateTodo : todo));

    return updateTodo;
  }

  @Delete(':id')
  deleteTodo(@Param('id') id): TodoDTO {
    const todoToDelete = todosData.find((todo) => todo.id === id);
    todosData = todosData.filter((todo) => todo.id !== id);

    return todoToDelete;
  }
}
