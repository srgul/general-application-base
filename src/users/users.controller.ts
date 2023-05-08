import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/security/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('signup')
    async create(@Body() createUserDto: CreateUserDto) {
        const saltedOrRounds = 10;
        createUserDto.password = await bcrypt.hash(
            createUserDto.password,
            saltedOrRounds,
        );
        return this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }
}
