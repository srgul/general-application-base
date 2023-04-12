import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { UserSchema } from '../users/schemas/user.schema';
import { LocalStrategy } from './local.auth';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: 'jKpB$*EJwP#98Qy^!F!KvYhX9c%eBZ7x\n',
            signOptions: { expiresIn: '60s' },
        }),
        MongooseModule.forFeature([{ name: 'user', schema: UserSchema }]),
    ],
    providers: [AuthService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
