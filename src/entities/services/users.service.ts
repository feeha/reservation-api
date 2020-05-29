import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersDto } from './../dtos/users.dto';
import { Users } from './../interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_MODEL') private readonly usersModel: Model<Users>) { }

    async create(usersDto: UsersDto): Promise<Users> {
        const createUsers = new this.usersModel(usersDto);
        return await createUsers.save();
    }
    async findAll(): Promise<Users[]> {
        return await this.usersModel.find().exec();
    }
    async find(id: string): Promise<Users> {
        return await this.usersModel.findById(id);
    }
    async findByEmail(email: string): Promise<Users> {
        return await this.usersModel.findOne(email);
    }
    async update(id: string, usersDto: UsersDto): Promise<Users> {
        return await this.usersModel.findByIdAndUpdate(id, usersDto);
    }
    async delete(id: string): Promise<Users> {
        return await this.usersModel.findByIdAndRemove(id);
    }
}