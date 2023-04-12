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

@Controller('todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(): TodoDTO[] {
        return this.todoService.getAll();
    }

    @Get(':id')
    getTodo(@Param('id') id: string): TodoDTO {
        return this.todoService.get(id);
    }

    @Post()
    createTodo(@Body() createTodo: TodoDTO) {
        return this.todoService.create(createTodo);
    }

    @Put(':id')
    updateTodo(@Body() updateTodo: TodoDTO, @Param('id') id): TodoDTO {
        return this.todoService.updateTodo(updateTodo, id);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id): TodoDTO {
        return this.todoService.delete(id);
    }
}
