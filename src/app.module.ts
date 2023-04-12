import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';
import { TodoService } from './todo/todo/todo.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        UsersModule,
        AuthModule,
    ],
    controllers: [AppController, TodoController],
    providers: [AppService, TodoService],
})
export class AppModule {}
