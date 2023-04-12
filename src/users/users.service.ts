import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userModel.create(createUserDto);
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findOne({ _id: id }).exec();
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate({ id, updateUserDto });
    }

    async remove(id: string) {
        return await this.userModel.findOneAndDelete({ _id: id }).exec();
    }

    async getUser(query: object): Promise<User> {
        return this.userModel.findOne(query);
    }
}
