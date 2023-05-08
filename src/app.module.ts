import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/todo.controller';
import { TodoService } from './todo/todo/todo.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EmailController } from './helper/email/email.controller';
import { EmailService } from './helper/email/email.service';
import { ConfigModule } from '@nestjs/config';
import { ClaimsModule } from './claims/claims.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'),
        UsersModule,
        AuthModule,
        ConfigModule.forRoot({
            envFilePath: ['.env'],
        }),
        ClaimsModule,
    ],
    controllers: [AppController, TodoController, EmailController],
    providers: [AppService, TodoService, EmailService],
})
export class AppModule {}
